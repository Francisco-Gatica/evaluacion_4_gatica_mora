## Integrantes
- Francisco Gatica
- Mora

## Descripción del proyecto
Aplicación SPA desarrollada con React y Next.js para administrar recursos tecnológicos de un laboratorio.

## Tecnologías utilizadas
- Next.js
- React
- TypeScript
- Local Storage
- Session Storage
- Cookies

## Instalación y ejecución
npm install
npm run dev

Funcionalidades
Crear recurso

Listar recursos

Editar recurso

Eliminar recurso

Buscar o filtrar recursos

Guardar datos en Local Storage

Guardar filtros o datos temporales en Session Storage

Guardar preferencias simples en Cookies

Componentes principales
Header: Muestra el título y preferencia del usuario.

ResourceForm: Formulario para registrar y editar recursos.

ResourceList: Tabla con el listado general.

ResourceCard: Tarjeta de recurso individual.

SearchBar: Barra de búsqueda por nombre.

FilterCategory: Selector para filtrar por categoría.

ThemeToggle: Selector de tema visual.

Hooks utilizados
useLocalStorage: Persistencia de la lista de recursos.

useSessionStorage: Almacenamiento temporal de la búsqueda y filtros.

useCookie: Guardado de la preferencia de color del tema.

Uso de inteligencia artificial
Se utilizó IA para la generación de la estructura de los Custom Hooks de almacenamiento, la modularización de los componentes visuales de React y la integración de los estados globales en la vista principal.

