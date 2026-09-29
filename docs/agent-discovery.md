# Lectura del sitio por agentes

El sitio sigue siendo estático en GitHub Pages. Astro genera `/index.md` desde
`src/data/restaurante.ts`, la misma fuente que usan el HTML y el menú JSON-LD.
No hay API de pedidos, autenticación ni servidor MCP.

## Señales de uso

`public/robots.txt` declara `Content-Signal: search=yes, ai-input=yes` en los grupos
general y OAI-SearchBot. Permite búsqueda y uso del contenido para responder
consultas. `ai-train` queda sin declarar; no se cambia la preferencia existente
sobre entrenamiento.

## Cloudflare Free

Las reglas siguientes complementan el despliegue estático. Se administran en
Cloudflare → distritochamorro.com → Rules → Overview; un push a GitHub no las crea.
Requieren que el dominio pase por el proxy de Cloudflare.

### URL Rewrite Rule: Distrito Chamorro - Markdown

Expresión:

```text
(http.host eq "distritochamorro.com" and http.request.uri.path eq "/" and http.request.method in {"GET" "HEAD"} and any(http.request.headers["accept"][*] eq "text/markdown"))
```

Reescribir la ruta a `/index.md` (Static) y conservar la query string.
Es una reescritura interna, no una redirección.

Se atiende la solicitud explícita `Accept: text/markdown`. Otras cabeceras,
incluidas listas de formatos y preferencias `q`, conservan el HTML; los clientes
también pueden usar `/index.md` directamente. No se elige el formato por user-agent.

### Response Header Transform Rule: Distrito Chamorro - Discovery

Expresión:

```text
(http.host eq "distritochamorro.com" and http.request.uri.path in {"/" "/index.md"})
```

Encabezados:

| Operación | Nombre | Valor |
| --- | --- | --- |
| Set static | Content-Signal | `search=yes, ai-input=yes` |
| Add static | Vary | `Accept` |
| Set static | Link | `<https://distritochamorro.com/>; rel="canonical", <https://distritochamorro.com/index.md>; rel="alternate"; type="text/markdown"` |

`Vary` se añade sin borrar otros valores, como `Accept-Encoding`. La reescritura
ocurre antes de la caché de Cloudflare, por lo que HTML y Markdown tienen rutas
de caché distintas. No configurar una clave de caché que vuelva a unirlas.

### Response Header Transform Rule: Distrito Chamorro - Markdown type

Expresión:

```text
(http.host eq "distritochamorro.com" and http.request.uri.path eq "/index.md")
```

Set static `Content-Type` a `text/markdown; charset=utf-8`.
GitHub Pages sirve archivos estáticos y no conserva los encabezados de la
`Response` de Astro; el tipo MIME se asegura en Cloudflare.

## Verificación después de publicar

```sh
curl -sS -D - https://distritochamorro.com/ -o /dev/null
curl -sS -D - -H 'Accept: text/markdown' https://distritochamorro.com/
curl -sS -D - https://distritochamorro.com/index.md
curl -sS https://distritochamorro.com/robots.txt
```

La primera respuesta debe ser HTML; la segunda y la tercera, Markdown con el
menú completo y `Content-Type: text/markdown`. Ambas variantes deben anunciar
`Vary: Accept`, `Content-Signal` y los enlaces de descubrimiento. Verificar también
que `Accept: text/html, text/markdown;q=0` siga devolviendo HTML.

Si hay un `403`, revisar primero los bloqueos del CDN. No desactivar protecciones
globales solo para que pase una prueba. Tras comprobar las respuestas, ejecutar
Rescan en Agent Readiness → Diagnostics.

Para revertir la negociación, desactivar la regla de reescritura. La portada
volverá a responder siempre HTML y `/index.md` seguirá disponible.

Referencias: [Transform Rules](https://developers.cloudflare.com/rules/transform/),
[caché y contenido alternativo](https://developers.cloudflare.com/cache/advanced-configuration/serve-tailored-content/),
[Content Signals](https://developers.cloudflare.com/bots/additional-configurations/managed-robots-txt/).
