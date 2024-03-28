
# Guide

Here's How you can Install Tailwindcss with EJS Template Engine


## Packages Installation

Initialize Project and install Express and EJS

```bash
  npm init -y
  npm i express ejs
```

## (Optional) ES6 Usage

. I am using ES6 Synatax you can use the older version

```bash
  In "Package.json" Add the Following code
  
  "type": "module"   // After "license": "ISC"
```
## Create Folders

```bash
  mkdir views
  cd views
  mkdir partials

  mkdir public
  cd public
  mkdir css
```


## Create 2 Files in css folder
```bash
  input.css
  output.css
```


## Create .ejs Files in views folder
```bash
  # Don't Forget to Add HTML Code

  /partials/Header.ejs
  /partials/Footer.ejs
  
  template.
```
## Link output.css in Header.ejs

```html
<link rel="stylesheet" href="/css/output.css">
```
## Initialize path in app.js

```javascript
// ES6
app.use(Express.static(path.join(process.cwd(), 'public')));
```

## Tailwindcss Installation

```bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init
```

## Add Tailwindcss code

```bash
In input.css

@tailwind base;
@tailwind components;
@tailwind utilities;
```


## In packge.json Add Script

```bash
# CAREFULLY add the css file path

npx tailwindcss -i ./public/css/input.css -o ./public/css/output.css --watch
```