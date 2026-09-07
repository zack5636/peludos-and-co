# Peludos & Co. — demo independiente

Web completa de peluquería canina extraída de la plantilla **Peludos & Co.** de Web Factory.
Es un proyecto autónomo: no depende de Web Factory ni lo modifica. Sirve para enseñarla a clientes.

## Arrancar

```bash
npm install
npm run dev
```

Se abre en <http://localhost:5180>. En Windows también sirve hacer doble clic en `abrir-demo.bat`,
que instala las dependencias la primera vez y arranca el servidor.

Para una versión compilada:

```bash
npm run build
npm run preview
```

## Conexión con ManageOS

La reserva y el catálogo salen de ManageOS cuando la web está conectada. **No hay
nada específico de esta demo**: es el mismo contrato público que usa cualquier
web que hagamos, así que estos tres pasos valen igual para el siguiente cliente.

1. **La web se identifica por su origen.** Al cargar pide `/public/v1/handshake`
   y la API le devuelve la clave pública del negocio cuyo dominio coincide. No
   hay credenciales dentro del código ni variables que configurar en producción.
2. **El negocio la conecta desde Manager** indicando su dominio. Manager lee el
   manifiesto que la web publica en `/.well-known/manageos.json` —servicios,
   horario y los campos que su formulario pide— y crea lo que falte.
3. **A partir de ahí manda Manager.** Servicios, precios, duración, horario,
   capacidad y campos del formulario se leen en vivo: lo que su dueño cambia allí
   se ve aquí sin desplegar nada, y lo que archiva deja de ofrecerse.

Sin conexión la web sigue funcionando con su propio catálogo y su formulario, que
es lo que permite enseñarla antes de dar de alta ningún dominio.

Para probar contra una API local, `.env.local`:

```
VITE_MANAGEOS_API_URL=http://127.0.0.1:3001
```

El código vive en `src/manageos/` y es reutilizable tal cual: `cliente.ts` habla
el contrato, `useManageOS.ts` mantiene el estado vivo y `ReservaConectada.tsx`
decide entre agenda real y respaldo. Lo único propio de una peluquería canina son
los campos que el negocio declara en Manager, no el código.

## Qué contiene

| Ruta | Qué es |
|---|---|
| `/` | Portada: hero, servicios, paquetes, proceso, ventajas, transformaciones y reserva rápida |
| `/servicios`, `/precios`, `/galeria`, `/sobre-nosotros`, `/contacto`, `/reservar` | Páginas públicas |
| `/aviso-legal`, `/privacidad`, `/cookies` | Textos legales |
| `/admin` | **Panel de administración** (no está enlazado desde la web) |

## El panel de administración

En <http://localhost:5180/admin>:

- **Temas.** Los tres temas que trae la plantilla — *Lavanda profesional*, *Menta limpia* y
  *Grafito tecnológico* — con su muestrario de color. Al seleccionar uno, la vista previa lo
  muestra al instante; con **Aplicar a la web** pasa a ser el que ve cualquier visitante.
  **Restablecer original** vuelve al tema de fábrica.
- **Vista previa en vivo.** La web real dentro del panel, con selector de página y de tamaño
  (escritorio, tablet, móvil).
- **Contenido de la web.** Recuento de páginas, secciones, servicios y paquetes.
- **Solicitudes de reserva.** Las que se envíen desde el formulario de la web.

### Dónde se guarda cada cosa

El tema elegido y las solicitudes se guardan en el `localStorage` **del navegador que abre la
demo**: no hay servidor ni base de datos. Consecuencias, para que no haya sorpresas delante de un
cliente:

- Si enseñas la demo en otro ordenador o en otro navegador, arranca con el tema original.
- Las solicitudes de reserva **no llegan a ningún sitio**: se quedan en ese navegador y se ven en
  el panel. Es una demo, no un sistema de reservas en producción.

Para conectar reservas de verdad hay que sustituir `submitDemoBooking` en `src/main.tsx` por una
llamada al backend correspondiente.

## Estructura

```
src/
  config.ts        Todo el contenido público: textos, precios, imágenes, páginas
  main.tsx         Punto de entrada: enruta entre la web y /admin
  admin/           Panel de administración (store.ts, AdminPanel.tsx, admin.css)
  site/            Runtime de la plantilla, copiado tal cual de Web Factory
public/assets/     Imágenes de la plantilla y tipografías, servidas en local
```

- **Cambiar textos, precios o imágenes:** se edita `src/config.ts`.
- **Cambiar el aspecto:** se elige el tema desde `/admin`.
- **Los tres temas** están definidos en `src/site/theme/themes.ts` (identificadores `pco-…`) y
  listados para el panel en `src/admin/store.ts`. Si se añade uno, hay que tocar los dos sitios.

## Créditos de las imágenes

Las fotografías demo proceden de Pexels y las tipografías (Inter, Poppins, Nunito) se distribuyen
bajo SIL Open Font License 1.1. La atribución detallada de cada imagen está en el campo `credit`
de cada asset dentro de `src/config.ts`. Antes de usar la web con un cliente real conviene
sustituir las fotos demo por las suyas.
