# Distrito Chamorro

Sitio web de **Distrito Chamorro** — chamorrería en Guadalajara, Jalisco. "Chamorro que empodera."

Isla Cozumel 2670, Col. Jardines de la Cruz, Guadalajara, Jal.
Miércoles a Domingo · 9:00 AM – 4:00 PM

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
  layouts/Layout.astro    — shell HTML, fuentes, paleta, tokens
  pages/index.astro       — single-page site (hero, menú, horarios, lugar, galería)
public/
  favicon.svg             — marca del chamorro, basada en el logo
.impeccable.md            — contexto de marca para iteraciones de diseño
```

## Cómo editar

- **Menú, precios, combos**: arreglos `tacos`, `tortas`, `bebidas`, `combos` al inicio de `src/pages/index.astro`.
- **Horarios**: objeto `horarios` en el mismo archivo.
- **Dirección**: objeto `direccion` (alimenta la ficha de contacto, el croquis y el pie).
- **Galería**: 4 tiles en `galeria`. Cámbialos por fotos reales cuando estén listas.
- **Paleta**: variables CSS en `src/layouts/Layout.astro`.
