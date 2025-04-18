# 🚀 React + TypeScript + Vite

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white)

Este template proporciona una configuración mínima para trabajar con React en Vite con HMR y algunas reglas de ESLint.

## 🔌 Plugins oficiales disponibles

Actualmente hay dos plugins oficiales:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) usa [Babel](https://babeljs.io/) para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) usa [SWC](https://swc.rs/) para Fast Refresh

## 📝 Expandiendo la configuración de ESLint

Si estás desarrollando una aplicación de producción, recomendamos actualizar la configuración para habilitar reglas de lint con tipos:

```js
export default tseslint.config({
  extends: [
    // Reemplaza ...tseslint.configs.recommended con esto
    ...tseslint.configs.recommendedTypeChecked,
    // O usa esto para reglas más estrictas
    ...tseslint.configs.strictTypeChecked,
    // Opcionalmente, agrega esto para reglas de estilo
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // otras opciones...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
También puedes instalar eslint-plugin-react-x y eslint-plugin-react-dom para reglas de lint específicas de React:

js
Copy
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Agrega los plugins react-x y react-dom
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // otras reglas...
    // Habilita sus reglas recomendadas de TypeScript
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
📦 Paquetes adicionales
bash
Copy
bun install react-hook-form zod @hookform/resolvers
react-hook-form → 📝 Librería para formularios

Zod → ✅ Validaciones para inputs

@hookform/resolvers → 🔄 Conecta zod con react-hook-form

⚛️ React + TypeScript + Vite + React Hook Form + Zod
Este proyecto es una plantilla inicial para trabajar con React, TypeScript y Vite, integrando formularios con react-hook-form y validaciones con Zod.

✨ Características principales
React: Biblioteca para construir interfaces de usuario.

TypeScript: 🛡️ Tipado estático para mejorar la calidad del código.

Vite: ⚡ Herramienta de desarrollo rápida con soporte para HMR.

React Hook Form: 📋 Manejo eficiente de formularios.

Zod: 🔍 Validación de esquemas para inputs.

@hookform/resolvers: 🔄 Conexión entre react-hook-form y Zod.

📋 Requisitos previos
Antes de comenzar, asegúrate de tener instalado:

Node.js (v16+)

npm o bun

🛠️ Instalación
Clona este repositorio:

bash
Copy
git clone https://github.com/tu-usuario/Form_Hook_React.git
cd Form_Hook_React

Instala las dependencias:

bash
Copy
npm install

o

bash
Copy
bun install


⚙️ Configuración del proyecto
1. Configuración de ESLint
El proyecto incluye ESLint para mantener código limpio. Para reglas más estrictas:

js
Copy
export default tseslint.config({
  extends: [
    ...tseslint.configs.strictTypeChecked, // 🚨 Reglas estrictas
    ...tseslint.configs.stylisticTypeChecked, // 🎨 Estilo opcional
  ],
  // ...
});
2. Paquetes adicionales
Instala:

bash
Copy
npm install react-hook-form zod @hookform/resolvers
o

bash
Copy
bun install react-hook-form zod @hookform/resolvers
🚀 Uso del proyecto
1. Iniciar servidor de desarrollo
bash
Copy
bun run dev
o

bash
Copy
bun dev
Accede en: http://localhost:5173

2. Estructura del proyecto
src/components/CustomInput.tsx - 🖊️ Input reutilizable

src/models/form.model.ts - 📊 Modelo de datos

src/App.tsx - 🏠 Punto de entrada

3. Validaciones con Zod
Ejemplo de esquema:

ts
Copy
import * as z from "zod";

export const formSchema = z.object({
  firstName: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Correo inválido"),
});
📜 Scripts disponibles
npm run dev - 🚀 Inicia desarrollo

npm run build - 🏗️ Construye para producción

npm run lint - 🔍 Ejecuta ESLint

🔮 Mejoras futuras
Más ejemplos de validaciones

🧪 Pruebas unitarias

🎨 Mejorar diseño con Tailwind/MUI

🤝 Contribuciones
¡Abre un issue o envía un PR!

📄 Licencia
MIT - Ver LICENSE para detalles.
```
