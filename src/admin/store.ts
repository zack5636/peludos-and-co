/**
 * Estado del panel de administración.
 *
 * La web pública no tiene servidor: es una demo que se enseña a clientes. Por
 * eso el tema elegido y las solicitudes de reserva viven en `localStorage` del
 * navegador que la abre. Cambiar de tema no toca ningún archivo, así que la
 * demo se puede reiniciar siempre desde el propio panel.
 */

export const THEME_STORAGE_KEY = 'peludos-and-co.theme';
export const REQUESTS_STORAGE_KEY = 'peludos-and-co.solicitudes';
export const ADMIN_ROUTE = '/admin';

/** Parámetro de URL que la vista previa del panel usa para mirar un tema sin aplicarlo. */
export const PREVIEW_PARAM = 'tema';

export interface ThemeOption {
  id: string;
  name: string;
  description: string;
  /** Muestrario de color del tema, en el mismo orden que lo declara la plantilla. */
  swatches: string[];
}

/**
 * Los tres temas que la plantilla «Peludos & Co.» trae de fábrica.
 *
 * Los identificadores tienen que coincidir con los del runtime (`src/site/theme/themes.ts`):
 * es lo único que conecta este panel con lo que se pinta en pantalla.
 */
export const THEMES: ThemeOption[] = [
  {
    id: 'pco-lavanda-profesional',
    name: 'Lavanda profesional',
    description: 'Blanco y lila de producto digital. La lectura original de la plantilla.',
    swatches: ['#8A43D6', '#B48AE8', '#F2E8FF', '#101B36', '#FFFFFF'],
  },
  {
    id: 'pco-menta-limpia',
    name: 'Menta limpia',
    description: 'Verde menta y azul frío; misma retícula, sensación clínica y luminosa.',
    swatches: ['#12907B', '#5EC6B4', '#E4F6F2', '#0E2A2B', '#FFFFFF'],
  },
  {
    id: 'pco-grafito-tecnologico',
    name: 'Grafito tecnológico',
    description: 'Superficies grafito con azul eléctrico; misma estructura, contraste invertido.',
    swatches: ['#5B8CFF', '#8AA9FF', '#151823', '#1F2434', '#EEF1FA'],
  },
];

export const DEFAULT_THEME_ID = THEMES[0].id;

export function isKnownTheme(value: string | null | undefined): value is string {
  return typeof value === 'string' && THEMES.some((theme) => theme.id === value);
}

export function themeById(id: string): ThemeOption {
  return THEMES.find((theme) => theme.id === id) ?? THEMES[0];
}

export function readTheme(): string {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isKnownTheme(stored) ? stored : DEFAULT_THEME_ID;
  } catch {
    // Navegador con almacenamiento bloqueado: la demo sigue, con el tema base.
    return DEFAULT_THEME_ID;
  }
}

export function writeTheme(id: string): void {
  if (!isKnownTheme(id)) return;
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, id);
  } catch {
    /* sin almacenamiento el cambio dura lo que dure la pestaña */
  }
  window.dispatchEvent(new CustomEvent(THEME_STORAGE_KEY, { detail: id }));
}

export function resetTheme(): void {
  try {
    window.localStorage.removeItem(THEME_STORAGE_KEY);
  } catch {
    /* nada que limpiar */
  }
  window.dispatchEvent(new CustomEvent(THEME_STORAGE_KEY, { detail: DEFAULT_THEME_ID }));
}

/**
 * Avisa de cualquier cambio de tema: el del propio panel (evento propio) y el
 * de otra pestaña abierta en la misma web (evento `storage`). Así la web y el
 * panel abiertos a la vez nunca muestran temas distintos.
 */
export function subscribeTheme(listener: (id: string) => void): () => void {
  const onCustom = (event: Event) => {
    const detail = (event as CustomEvent<string>).detail;
    listener(isKnownTheme(detail) ? detail : DEFAULT_THEME_ID);
  };
  const onStorage = (event: StorageEvent) => {
    if (event.key !== THEME_STORAGE_KEY) return;
    listener(isKnownTheme(event.newValue) ? event.newValue : DEFAULT_THEME_ID);
  };
  window.addEventListener(THEME_STORAGE_KEY, onCustom);
  window.addEventListener('storage', onStorage);
  return () => {
    window.removeEventListener(THEME_STORAGE_KEY, onCustom);
    window.removeEventListener('storage', onStorage);
  };
}

/* ------------------------------ Solicitudes ------------------------------- */

export interface DemoRequest {
  id: string;
  reference: string;
  createdAt: string;
  status: 'pendiente';
  values: Record<string, string>;
}

export function readRequests(): DemoRequest[] {
  try {
    const raw = window.localStorage.getItem(REQUESTS_STORAGE_KEY);
    const parsed = raw ? (JSON.parse(raw) as DemoRequest[]) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * Guarda una solicitud de reserva **solo en este navegador**.
 *
 * No hay backend: la demo no promete que la petición haya llegado a nadie, y el
 * panel la muestra etiquetada como local para que quede claro al enseñarla.
 */
export function saveDemoRequest(values: Record<string, string>): DemoRequest {
  const created = new Date();
  const request: DemoRequest = {
    id: `req-${created.getTime().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    reference: `PC-${created.getFullYear()}${String(created.getMonth() + 1).padStart(2, '0')}${String(created.getDate()).padStart(2, '0')}-${Math.floor(Math.random() * 9000 + 1000)}`,
    createdAt: created.toISOString(),
    status: 'pendiente',
    values,
  };
  try {
    const next = [request, ...readRequests()].slice(0, 50);
    window.localStorage.setItem(REQUESTS_STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* sin almacenamiento la solicitud no se lista, pero la web responde igual */
  }
  window.dispatchEvent(new CustomEvent(REQUESTS_STORAGE_KEY));
  return request;
}

export function clearRequests(): void {
  try {
    window.localStorage.removeItem(REQUESTS_STORAGE_KEY);
  } catch {
    /* nada que limpiar */
  }
  window.dispatchEvent(new CustomEvent(REQUESTS_STORAGE_KEY));
}

export function subscribeRequests(listener: () => void): () => void {
  const onChange = () => listener();
  window.addEventListener(REQUESTS_STORAGE_KEY, onChange);
  window.addEventListener('storage', onChange);
  return () => {
    window.removeEventListener(REQUESTS_STORAGE_KEY, onChange);
    window.removeEventListener('storage', onChange);
  };
}
