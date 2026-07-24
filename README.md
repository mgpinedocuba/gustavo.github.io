# Sitio personal — Quarto

Reproducción en [Quarto](https://quarto.org) de tu web personal, lista para
publicar en GitHub Pages. Mantiene tu contenido (home + CV), tu paleta de
colores y los círculos numerados de publicaciones, y añade un blog de notas
con soporte para LaTeX.

## Flujo de trabajo: compilar en local y subir por la web

### 1. Editar y previsualizar

```bash
quarto preview
```

Abre el sitio en local con recarga automática mientras editas los `.qmd`.

### 2. Compilar

Cuando esté listo:

```bash
quarto render
```

Esto genera el sitio completo en la carpeta `docs/`.

### 3. Subir a GitHub por la web

Sube **todos los ficheros del proyecto**, incluida la carpeta `docs/` ya
generada, a tu repositorio `gustavo.github.io` (arrastrándolos en la web de
GitHub, como sueles hacer).

### 4. Configurar Pages (solo la primera vez)

En GitHub, en tu repositorio: **Settings → Pages → Build and deployment →
Source: Deploy from a branch**, elige la rama `main` y la carpeta **`/docs`**.
Guarda. En un par de minutos tu sitio estará publicado.

A partir de ahí, cada vez que cambies algo: `quarto render` y vuelves a subir
la carpeta `docs/` actualizada.

## Estructura

```
_quarto.yml       Configuración: navbar, tema, footer. (output-dir: docs)
styles.scss       Paleta de colores (variables del tema).
styles.css        Layout del CV: dos columnas, filas .job, círculos numerados.
index.qmd         Página de inicio.
cv.qmd            Curriculum vitae.
notes.qmd         Índice del blog (lista la carpeta notes/ automáticamente).
notes/            Cada .qmd aquí aparece en el índice.
mgpc.jpg          Tu foto.
docs/             HTML generado por 'quarto render' (esto es lo que Pages sirve).
```

## Añadir una nota nueva

Crea un `.qmd` dentro de `notes/` con una cabecera como esta:

```yaml
---
title: "Título de la nota"
description: "Resumen breve que aparece en el índice."
date: 2025-07-24
categories: [physics, notes]
---
```

Escribe debajo en Markdown. Matemáticas entre `$...$` (en línea) o `$$...$$`
(en bloque). Aparecerá sola en la página **Notes** tras el próximo `render`.
