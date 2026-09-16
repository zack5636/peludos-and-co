import { useEffect, useMemo, useState } from 'react';
import {
  obtenerReservaPorToken,
  anularReservaPorToken,
  moverReservaPorToken,
  panoramaDeHuecos,
  ErrorDeManageOS,
  type ReservaGestionable,
} from './cliente';

/*
 * La cita, vista y gestionada por su dueño.
 *
 * Mismo principio que al reservar: lo que se puede hacer no lo calcula esta
 * pantalla, lo dice el servidor (`canCancel`, `canReschedule`, `reason`). Si
 * esto se dedujera aquí a partir de un ajuste y un reloj, esta web y ManageOS
 * podrían acabar diciendo cosas distintas sobre la misma cita.
 */

const ESTADOS: Record<ReservaGestionable['status'], string> = {
  pending: 'Pendiente de confirmar',
  confirmed: 'Confirmada',
  completed: 'Ya atendida',
  cancelled: 'Cancelada',
  no_show: 'No se presentó',
};

const SENAL: Record<'pending' | 'paid' | 'waived' | 'refunded', string> = {
  pending: 'Pendiente de pago',
  paid: 'Pagada',
  waived: 'No hace falta pagarla',
  refunded: 'Devuelta',
};

function fechaLarga(iso: string, zona: string): string {
  const fecha = new Date(iso);
  const partes = new Intl.DateTimeFormat('es-ES', {
    timeZone: zona, weekday: 'long', day: 'numeric', month: 'long',
  }).formatToParts(fecha);
  const trozo = (tipo: string) => partes.find((parte) => parte.type === tipo)?.value ?? '';
  return `${trozo('weekday')} ${trozo('day')} de ${trozo('month')}`;
}

function hora(iso: string, zona: string): string {
  return new Intl.DateTimeFormat('es-ES', {
    timeZone: zona, hour: '2-digit', minute: '2-digit', hour12: false,
  }).format(new Date(iso));
}

function dinero(minor: number | null, moneda: string | null): string | null {
  if (minor === null || !moneda) return null;
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: moneda }).format(minor / 100);
}

function motivo(reserva: ReservaGestionable, telefono: string | null): string {
  if (reserva.reason === 'already_cancelled') return 'Esta cita ya está cancelada.';
  if (reserva.reason === 'already_closed') return 'Esta cita ya pasó.';
  if (reserva.reason === 'too_late') {
    return `Para cambiarla por internet hacen falta ${reserva.minHours} h de antelación.`
      + (telefono ? ` Llama al ${telefono} y te ayudan.` : ' Llama al negocio y te ayudan.');
  }
  if (reserva.reason === 'not_allowed') {
    return 'Este negocio prefiere gestionar los cambios hablando contigo.'
      + (telefono ? ` Llama al ${telefono}.` : '');
  }
  return '';
}

export function GestionarCita({
  manageToken,
  onVolver,
  onCambiada,
}: {
  manageToken: string;
  onVolver: () => void;
  onCambiada: () => void;
}) {
  const [reserva, setReserva] = useState<ReservaGestionable | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modo, setModo] = useState<'ver' | 'mover' | 'anular'>('ver');
  const [dia, setDia] = useState(() => new Date().toISOString().slice(0, 10));
  const [huecos, setHuecos] = useState<string[] | null>(null);
  const [nuevaHora, setNuevaHora] = useState('');
  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    let vivo = true;
    setCargando(true);
    obtenerReservaPorToken(manageToken)
      .then((respuesta) => { if (vivo) { setReserva(respuesta); setError(null); } })
      .catch((fallo: unknown) => {
        if (vivo) setError(fallo instanceof ErrorDeManageOS ? fallo.message : 'No hemos podido cargar tu cita.');
      })
      .finally(() => { if (vivo) setCargando(false); });
    return () => { vivo = false; };
  }, [manageToken]);

  useEffect(() => {
    if (modo !== 'mover' || !reserva) return;
    let vivo = true;
    setHuecos(null);
    panoramaDeHuecos(reserva.service.id, dia, dia)
      .then((respuesta) => {
        if (!vivo) return;
        const diaEncontrado = respuesta.days.find((d) => d.date === dia);
        setHuecos((diaEncontrado?.slots ?? []).filter((hueco) => hueco.available).map((hueco) => hueco.startsAt));
      })
      .catch(() => { if (vivo) setHuecos([]); });
    return () => { vivo = false; };
  }, [modo, dia, reserva]);

  const zona = reserva?.timezone ?? 'Europe/Madrid';
  const telefonoDelNegocio = reserva?.business.phone ?? null;
  const precio = useMemo(
    () => (reserva ? dinero(reserva.service.priceMinor, reserva.service.currency) : null),
    [reserva],
  );

  const anular = async () => {
    setEnviando(true);
    try {
      const actualizada = await anularReservaPorToken(manageToken);
      setReserva(actualizada);
      setModo('ver');
      setError(null);
      onCambiada();
    } catch (fallo) {
      setError(fallo instanceof ErrorDeManageOS ? fallo.message : 'No hemos podido anular la cita.');
    } finally {
      setEnviando(false);
    }
  };

  const mover = async () => {
    if (!nuevaHora) return;
    setEnviando(true);
    try {
      const actualizada = await moverReservaPorToken(manageToken, nuevaHora);
      setReserva(actualizada);
      setModo('ver');
      setNuevaHora('');
      setError(null);
      onCambiada();
    } catch (fallo) {
      setError(fallo instanceof ErrorDeManageOS ? fallo.message : 'No hemos podido cambiar la hora.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="manageos-gestionar">
      <button type="button" className="manageos-gestionar__volver" onClick={onVolver}>
        ← Volver a mis citas
      </button>

      {cargando ? (
        <p className="manageos-citas-loading">Buscando tu cita…</p>
      ) : !reserva ? (
        <p className="manageos-gestionar__error" role="alert">
          {error ?? 'No hemos encontrado esa cita.'}
        </p>
      ) : (
        <>
          <h4 className="manageos-gestionar__servicio">{reserva.service.name}</h4>
          <p className="manageos-gestionar__fecha">
            {fechaLarga(reserva.startsAt, zona)} · {hora(reserva.startsAt, zona)}
            {reserva.workerName ? ` · con ${reserva.workerName}` : ''}
          </p>

          <dl className="manageos-gestionar__datos">
            <div><dt>Estado</dt><dd>{ESTADOS[reserva.status]}</dd></div>
            <div><dt>A nombre de</dt><dd>{reserva.clientName}</dd></div>
            <div><dt>Duración</dt><dd>{reserva.service.durationMinutes} min</dd></div>
            {precio ? <div><dt>Precio</dt><dd>{precio}</dd></div> : null}
            {reserva.deposit ? (
              <div>
                <dt>Señal</dt>
                <dd>
                  {dinero(reserva.deposit.amountMinor, reserva.deposit.currency)}
                  {' · '}{SENAL[reserva.deposit.status]}
                </dd>
              </div>
            ) : null}
            {reserva.business.address ? <div><dt>Dónde</dt><dd>{reserva.business.address}</dd></div> : null}
          </dl>

          {error ? <p className="manageos-gestionar__error" role="alert">{error}</p> : null}

          {modo === 'ver' ? (
            <div className="manageos-gestionar__acciones">
              {reserva.canReschedule ? (
                <button
                  type="button"
                  className="manageos-btn-primary"
                  onClick={() => { setDia(reserva.startsAt.slice(0, 10)); setModo('mover'); }}
                >
                  Cambiar la hora
                </button>
              ) : null}
              {reserva.canCancel ? (
                <button type="button" className="manageos-btn-account" onClick={() => setModo('anular')}>
                  Anular la cita
                </button>
              ) : null}
              {!reserva.canCancel && !reserva.canReschedule ? (
                <p className="manageos-gestionar__nota">{motivo(reserva, telefonoDelNegocio)}</p>
              ) : null}
            </div>
          ) : null}

          {modo === 'anular' ? (
            <div className="manageos-gestionar__confirmar">
              <p>
                ¿Seguro que quieres anular? El hueco se libera para otra persona y no se puede
                recuperar solo.
                {reserva.deposit && reserva.deposit.status === 'paid'
                  ? ' Sobre la señal ya pagada, habla con el negocio.'
                  : ''}
              </p>
              <div className="manageos-gestionar__acciones">
                <button type="button" className="manageos-btn-account" onClick={() => setModo('ver')} disabled={enviando}>
                  Mejor no
                </button>
                <button type="button" className="manageos-btn-primary" onClick={() => void anular()} disabled={enviando}>
                  {enviando ? 'Anulando…' : 'Sí, anular'}
                </button>
              </div>
            </div>
          ) : null}

          {modo === 'mover' ? (
            <div className="manageos-gestionar__mover">
              <h5>Elige otra hora</h5>
              <label className="manageos-gestionar__dia">
                Día
                <input
                  type="date"
                  value={dia}
                  min={new Date().toISOString().slice(0, 10)}
                  onChange={(evento) => { setDia(evento.target.value); setNuevaHora(''); }}
                />
              </label>
              {huecos === null ? (
                <p className="manageos-gestionar__nota">Buscando horas libres…</p>
              ) : huecos.length === 0 ? (
                <p className="manageos-gestionar__nota">Ese día no queda ninguna hora libre. Prueba otro.</p>
              ) : (
                <div className="manageos-gestionar__horas">
                  {huecos.map((hueco) => (
                    <button
                      key={hueco}
                      type="button"
                      className={`manageos-hora-chip${hueco === nuevaHora ? ' is-active' : ''}`}
                      aria-pressed={hueco === nuevaHora}
                      onClick={() => setNuevaHora(hueco)}
                    >
                      {hora(hueco, zona)}
                    </button>
                  ))}
                </div>
              )}
              <div className="manageos-gestionar__acciones">
                <button
                  type="button"
                  className="manageos-btn-account"
                  onClick={() => { setModo('ver'); setNuevaHora(''); }}
                  disabled={enviando}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="manageos-btn-primary"
                  onClick={() => void mover()}
                  disabled={!nuevaHora || enviando}
                >
                  {enviando ? 'Cambiando…' : 'Confirmar el cambio'}
                </button>
              </div>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
