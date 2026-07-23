# Sistema de Gestión de Recursos Tecnológicos

## Integrantes
- Francisco Gatica Cabezas
- Leonardo Mora Santana

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
´´´bash 
- git clone https://github.com/Francisco-Gatica/evaluacion_4_gatica_mora
- cd evaluacion_4_gatica_mora
- npm install
- npm run dev

## Estructura del programa
evaluacion_4_gatica_mora/                           
- app
  *globals.css         
--layout.tsx          
--page.tsx               
│   │
│   ├── components/
│   │   ├── FilterCategory.tsx   
│   │   ├── Header.tsx            
│   │   ├── ResourceCard.tsx      
│   │   ├── ResourceForm.tsx       
│   │   ├── ResourceList.tsx      
│   │   ├── SearchBar.tsx         
│   │   └── ThemeToggle.tsx  
│   │
│   ├── hooks/
│   │   ├── useCookie.ts 
│   │   ├── useLocalStorage.ts  
│   │   └── useSessionStorage.ts
│   │
│   ├── types/
│   │   └── Product.ts  
│   │
│   └── utils/
│       ├── initialData.ts  
│       ├── styles.ts
│       └── validations.ts 
│
├── .gitignore 
├── package-lock.json
├── package.json   
├── README.md
└── tsconfig.json

## Funcionalidades 
- Crear recurso
- Listar recursos
- Editar recurso
- Eliminar recurso
- Buscar o filtrar recursos
- Guardar datos en Local Storage
- Guardar filtros o datos temporales en Session Storage
- Guardar preferencias simples en Cookies

## Componentes principales
- Header: Muestra el título de la aplicación, el nombre de usuario y el selector de tema.
- ResourceForm: Formulario para registrar y editar recursos con validaciones nativas.
- ResourceList: Tabla que muestra el listado general de recursos registrados y sus estados.
- ResourceCard: Tarjeta individual para visualizar los datos de un recurso.
- SearchBar: Barra de entrada de texto para buscar recursos por nombre.
- FilterCategory: Selector desplegable para filtrar el inventario por categoría.
- ThemeToggle: Selector visual para cambiar la preferencia de color (acento) del usuario.

## Hooks utilizados
- useState: Utilizado para manejar los estados locales de los componentes, como los datos del formulario (formData) y el recurso en edición (editingResource).
- useEffect: Utilizado para rellenar el formulario automáticamente cuando se selecciona un recurso para editar, detectando los cambios en la prop resourceToEdit.
- useLocalStorage: Hook personalizado para la persistencia del listado general de recursos en el navegador.
- useSessionStorage: Hook personalizado para el almacenamiento temporal de los términos de búsqueda y filtros seleccionados.
- useCookie: Hook personalizado para guardar y recuperar las preferencias visuales del usuario (color de acento y nombre).

## Uso de inteligencia artificial
- Se utilizó Gemini como apoyo al desarrollo para la generación de la estructura inicial de los Custom Hooks de almacenamiento, la modularización de los componentes visuales de React y la integración de los estados globales en la vista principal.
