# Raíces — Cafetería, Pizzería y Hamburguesería (Cártama)

Web one-page para Raíces, hecha en HTML, CSS y JS puros (sin frameworks ni build).

## Estructura

```
index.html
css/style.css
js/main.js
img/            fotos reales + placeholders pendientes
carta/          PDF de la carta completa
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

## Ya resuelto

- Teléfono, dirección (Calle Juan Carlos I, 57 · Cártama) y horario (miércoles-domingo 18:00–24:00, cerrado lunes y martes) actualizados en `index.html`, el mapa y `legal/aviso-legal.html`.
- Carta completa alojada en `carta/carta-raices-cartama-2025.pdf` y enlazada desde el botón "Ver carta completa" (ya no depende de Google Drive).
- Logo definitivo del cliente recortado en redondo (`img/logo-raices.png`) en cabecera, pie, páginas legales y favicon/apple-touch-icon.
- Fotos reales en uso: hero, ambas pizzas de menú/galería, hamburguesas (menú, especialidad y trío gourmet), patatas con pollo y queso, bocadillo tostado, campero con patatas, mini brioche de pulled pork, pan de ajo, nachos (guacamole y con carne), ensalada (`img/raices-ensalada-cesar.jpg`, foto que eligió el cliente), e interior con el logo de la pared. Ya no queda ninguna categoría con placeholder.
- Sección "La carta" y "Especialidades" actualizadas con las categorías y platos **reales** de la carta descargada (Entrantes, Ensaladas, Camperos y bocadillos, Tex Mex, Pizzas, Hamburguesas).
- Estilo actual: blanco y negro con el amarillo como único color de acento (antes probamos un tono cálido oscuro tipo madera/granate, pero no convenció). Confirmado como definitivo por el cliente.

## Pendiente antes de publicar

- Confirmar el número de **WhatsApp** (el 951 20 41 24 aportado parece un fijo, usado en la carta para "pide a domicilio"; los botones de WhatsApp siguen con el placeholder `34600000000`).
- Confirmar si existe carta de bebidas/café aparte de la de comida (la carta descargada no incluye ninguna) — si no existe, revisar si el hero/textos deberían dejar de mencionar "café" tan explícitamente.
- Enlazar la ficha real de Google Business (reseñas).
- Completar los datos fiscales (razón social, NIF) en `legal/aviso-legal.html`.
