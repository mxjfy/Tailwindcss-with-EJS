
# Tailwind CSS Integration with EJS

A brief description of what this project does and who it's for


## Prerequisites

Node.js and npm installed on your system
Steps

## Steps:-
### 1. Create a New Node.js Project

You can use npm or yarn, I used npm

```bash
mkdir my-project
cd my-project
npm init -y

```

### 2. Install Tailwind CSS and EJS

```bash
npm install ejs tailwindcss postcss autoprefixer
npx tailwindcss init

```

### 3. Create Two CSS Files
input.css and output.css in /public/css

```bash
npm install ejs tailwindcss postcss autoprefixer
npx tailwindcss init

```

### 4. Config tailwindcss

```bash
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {},
  },
  plugins: [],
}

```
### 5. Define Tailwind CSS in Input CSS

Let the output.css empty
```bash
/* public/css/input.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 6. Create a Watch Script

Open package.json and add below Script

```bash// package.json
"scripts": {
    "style": "npx tailwindcss -i ./public/css/input.css -o ./public/css/output.css --watch"
}
```

### 7. Run Project 🚀
Now run development Server and Tailwind watch script


```bash// package.json
nodemon app.js
npm run style
```