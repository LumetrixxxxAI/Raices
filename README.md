# Raíces — Cafetería, Pizzería y Hamburguesería (Cártama)

Web one-page para Raíces, hecha en HTML, CSS y JS puros (sin frameworks ni build).

## Estructura

```
index.html
css/style.css
js/main.js
img/            fotos y placeholders
legal/          aviso legal, privacidad, cookies
favicon.ico, apple-touch-icon.png, site.webmanifest
robots.txt, sitemap.xml
```

## Publicar con GitHub Pages

1. Sube (push) esta rama a GitHub si aún no está subida.
2. En GitHub, entra en el repositorio → **Settings** → **Pages**.
3. En **Build and deployment → Source**, elige **Deploy from a branch**.
4. En **Branch**, selecciona `main` y la carpeta `/ (root)`, y pulsa **Save**.
5. Espera 1-2 minutos: la web quedará publicada en `https://<usuario>.github.io/Raices/`.
6. Si luego conectas un dominio propio, añádelo en la misma sección **Pages → Custom domain** (esto crea un archivo `CNAME` automáticamente).

## Pendiente antes de publicar (ver también el aviso al final del chat)

- Sustituir todas las imágenes placeholder (`img/*.svg`) por fotos reales.
- Sustituir el teléfono, WhatsApp y dirección de ejemplo (`600 00 00 00` / `[DIRECCIÓN PENDIENTE]`) por los datos reales, en `index.html` y en `legal/aviso-legal.html`.
- Enlazar el Google Drive real con la carta completa (botón "Ver carta completa").
- Enlazar la ficha real de Google Business (reseñas y "Cómo llegar" ya usa un mapa genérico de Cártama; ajustar a la dirección exacta).
- Confirmar el usuario real de Instagram.
- Completar los datos fiscales (razón social, NIF) en `legal/aviso-legal.html`.
