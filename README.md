# Curriculum Interactivo - Laboratorio 01

Aplicacion web estatica que simula un explorador de archivos para mostrar CVs.
Desde una vista tipo "folder explorer" puedes abrir el perfil de cada persona y navegar sus secciones (About me, Education, Experience, Skills, Languages), proyectos y contacto.

## Tecnologias usadas

- HTML5
- CSS3 (custom properties, media queries, animaciones)
- JavaScript ES6+ (modulos)
- JSON como fuente de datos

No usa dependencias externas ni build tools.

## Estructura del proyecto

```text
curriculum/
	index.html
	style.css
	script.js
	data.json
	README.md
	components/
		router.js
		explorer.js
		cv.js
```

## Como ejecutar

Como el proyecto carga `data.json` con `fetch`, debe ejecutarse con servidor local (no `file://`).

1. Abre la carpeta en VS Code.
2. Inicia un servidor estatico. Opcion recomendada: extension Live Server.
3. Abre la URL local (ejemplo: `http://127.0.0.1:5500/`).

Si abres `index.html` directo en el navegador, aparecera el mensaje:
`No se pudo cargar data.json. Usa Live Server (no file://).` 
También puedes ingresar al proyecto por medio de la siguiente URL: https://karinamd16.github.io/ 

## Flujo de navegacion

### Vista explorador

- Muestra carpetas para cada persona de `data.json`.
- Click o tecla `Enter`/`Space` abre el CV.

### Vista CV

- Carga dinamicamente el perfil completo.
- Sidebar con:
  - `Navigate`: salto interno a secciones.
  - `Projects`: abre anclas internas o links externos.
  - `Contact`: muestra una vista dentro del CV con los métodos de contacto y un formulario.
- En mobile (`<= 900px`) usa menu hamburguesa con overlay y cierre por click fuera o `Esc`.

### Barra de direccion interna

Soporta rutas normalizadas por `components/router.js`:

- `curriculum/explorer`
- `curriculum/karina`
- `curriculum/elein`
- `curriculum/daniel`

Si la ruta no existe, muestra: `No existe: "..."`.

## Arquitectura (archivos clave)

- `script.js`
  - Punto de entrada.
  - Carga `data.json`.
  - Controla estado de vista (explorer vs person).
  - Maneja boton back y barra de direccion.

- `components/router.js`
  - Normaliza texto/URL para convertirlo en ruta interna.
  - Construye direcciones de explorador y de persona.

- `components/explorer.js`
  - Genera la grilla de carpetas desde `people`.
  - Dispara callback `onOpenPerson(id)`.

- `components/cv.js`
  - Renderiza CV completo desde un objeto persona.
  - Construye education, experience, skills (con iconos), languages.
  - Configura acciones de sidebar, smooth scroll y animaciones reveal.
  - Implementa menu movil.

- `style.css`
  - Estilo general (monitor/window), explorer cards y layout CV.
  - Responsive para desktop/tablet/mobile.
  - Soporte `prefers-reduced-motion`.

- `data.json`
  - Fuente de datos de perfiles.
  - Define paleta, resumen, secciones de CV, proyectos y contacto.

## Estructura esperada de `data.json`

Cada persona en `people` usa esta forma general:

```json
{
  "id": "karina",
  "name": "Nombre",
  "palette": {
    "accent": "#hex",
    "accentDark": "#hex",
    "accentSoft": "#hex",
    "bgSoft": "#hex"
  },
  "summary": "Texto breve",
  "skills": [
    {
      "title": "Categoria",
      "items": [{ "name": "Skill", "icon": "js" }]
    }
  ],
  "experience": [{
          "organization": "value",
          "location": "value",
          "role": "value",
          "roleAccent": true,
          "period": "value",
          "summary": "value",
          "highlights": [
            "value",
            "value",
            "value",
          ]
        }],
  "education": [{
          "institution": "value",
          "degree": "value",
          "location": "value",
          "date": "value"
        }],
  "languages": [{ "name": "Spanish", "level": "Native" }],
  "projects": [{ "name": "Proyecto", "href": "#anchor o https://..." }],
  "contact": [{ "label": "Email", "value": "mail", "href": "mailto:..." }]
}
```

## Como agregar una nueva persona

1. Abre `data.json`.
2. Dentro de `people`, agrega un nuevo objeto con una clave unica (ej: `"maria"`).
3. Completa los campos del esquema anterior.
4. Guarda y recarga el navegador.

El explorador mostrara la nueva carpeta automaticamente.
