# Distrito Chamorro

Sitio web de **Distrito Chamorro** — chamorrería en Guadalajara, Jalisco. "Chamorro que empodera."

Isla Cozumel 2670, Col. Jardines de la Cruz, Guadalajara, Jal.
Miércoles a Domingo · 10:00 AM – 4:00 PM

## Stack

- [Astro](https://astro.build) 6
- Fuentes: Big Shoulders Display + Hanken Grotesk (Google Fonts)
- Paleta oficial en `src/layouts/Layout.astro` (variables CSS)
- Contexto de diseño en [`.impeccable.md`](./.impeccable.md)

## Desarrollo

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # build a ./dist
npm run preview    # preview del build
```

## Estructura

```
src/
  assets/logo.png         — logo oficial
  data/restaurante.ts     — menú, precios, horarios, contacto y enlaces compartidos
  layouts/Layout.astro    — shell HTML, fuentes, paleta, tokens
  pages/index.astro       — single-page site (hero, menú, horarios, lugar, galería)
  pages/index.md.ts        — versión Markdown generada con los mismos datos
public/
  favicon.svg             — marca del chamorro, basada en el logo
.impeccable.md            — contexto de marca para iteraciones de diseño
```

## Cómo editar

- **Menú, precios, combos**: `tacos`, `tortaAhogada`, `chamorroEntero`, `bebidas` y `combos` en `src/data/restaurante.ts`. Alimentan la página, los datos estructurados y `/index.md`. Los precios corresponden al local; las plataformas de reparto pueden tener precios distintos.
- **Horarios**: objeto `horarios` en el mismo archivo. Mantener sincronizados el texto visible y los campos `diasSemana`, `apertura` y `cierre` usados en los datos estructurados.
- **Dirección**: objeto `direccion` (alimenta la ficha de contacto, el croquis y el pie).
- **Contacto y plataformas**: `contacto`, `reparto` y `redes` en `src/data/restaurante.ts`.
- **Galería**: desactivada hasta tener fotos reales del local.
- **Paleta**: variables CSS en `src/layouts/Layout.astro`.

## Búsquedas y descubrimiento

- El título, la descripción y la URL canónica están en `src/layouts/Layout.astro`.
- Los datos JSON-LD `Restaurant` y `Menu` están en `src/pages/index.astro`. Dirección, horario y precios deben coincidir con la información visible. No se publican puntuaciones ni cantidades de reseñas que puedan quedar desactualizadas.
- Los botones de Maps abren la ficha verificada del negocio. Los de reparto incluyen texto visible además del logo.
- `public/robots.txt` permite el rastreo, incluido OAI-SearchBot, y declara `public/sitemap.xml`. Incluye `Content-Signal: search=yes, ai-input=yes`; no declara una preferencia sobre entrenamiento (`ai-train`). El sitemap incluye solo la portada; `/og/` es una herramienta de diseño con `noindex`.
- `/index.md` se genera en cada build y se anuncia con `rel="alternate"` en el HTML. No se mantiene una segunda copia manual del menú. La negociación HTTP y los encabezados se configuran en Cloudflare: ver [configuración y verificación](docs/agent-discovery.md).
- Si se añaden páginas públicas indexables, incluirlas en el sitemap. No actualizar fechas de contenido o precios sin revisarlos.
- Tras publicar, inspeccionar la portada en Google Search Console y enviar `https://distritochamorro.com/sitemap.xml`. La verificación requiere acceso a la propiedad de Search Console.
- Si un rastreador recibe un `403`, revisar las reglas del alojamiento o CDN. `robots.txt` por sí solo no elimina bloqueos HTTP.

Estos cambios facilitan el acceso y la interpretación del contenido; no garantizan una posición en buscadores o recomendaciones de asistentes.
