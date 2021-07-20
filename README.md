# Configuring ESLint + Prettier for a React project

_Here you are going to find the necessary steps to implement and configure ESLint + Prettier in your React project by using some rules that help you while coding. It is a really easy process, just follow the instructions below._ 
## **Installation** 🚀

_In this repository you will find the eslintrc.js and the package.json which helps you to have an idea of the final result to make everything work._

### ***Starting*** 🔧

_Firstly, we need a started project to implement ESLint. In that case, we created a React project by using [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)_

```
$ npm init vite@latest
```
_and run the project_
```
$ cd my-project-name
$ npm install
$ npm run dev
```
_After that, we deleted every base code and we created a simple todo list_

### ***ESLint*** 📃
_Next, we add ESLint as a dev dependency_
```
$ npm install eslint --save-dev
```
_To create and set up we need a configuration file, the easiest way is to use --init flag_
```
$ npx eslint --init
```
_The options that we chose were:_
> To check syntax, find problems, and enforce code style

> JavaScript modules(import/export)

> React

> No TypeScript

> Browser

> Use a popular style guide

> Standard

> JavaScript

_and select 'Yes' to install packages if necessary_

\
_To make changes effective we need to have the ESLint extension in our IDE (Visual Studio Code). Check their instructions:_
>The extension uses the ESLint library installed in the opened workspace folder. If the folder doesn't provide one the extension looks for a global install version. If you haven't installed ESLint either locally or globally do so by running npm install eslint in the workspace folder for a local install or npm install -g eslint for a global install.

\
_Extra: to make ESLint help us automatically we need to configure our Visual Studio Code settings.json and add the next code:_
```
$ "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
```


### ***Prettier*** ✨
_To run Prettier as an ESLint rule and report differences as individual ESLint issues we need to install:_
```
$ npm install --save-dev eslint-plugin-prettier
$ npm install --save-dev --save-exact prettier
```
_* eslint-plugin-prettier does not install Prettier or ESLint for you. You must install these yourself._

\
_Then, in your .eslintrc.json:_
```
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```
_After that, we can follow the next steps from it [official documentation](https://github.com/prettier/eslint-plugin-prettier)_


#### ***Recommended Configuration***

This plugin works best if you disable all other ESLint rules relating to code formatting, and only enable rules that detect potential bugs. (If another active ESLint rule disagrees with prettier about how code should be formatted, it will be impossible to avoid lint errors.) You can use eslint-config-prettier to disable all formatting-related ESLint rules.

\
This plugin ships with a plugin:prettier/recommended config that sets up both the plugin and eslint-config-prettier in one go.

\
In addition to the above installation instructions, install eslint-config-prettier:
```
$ npm install --save-dev eslint-config-prettier
```
Then you need to add plugin:prettier/recommended as the last extension in your .eslintrc.json:
```
{
  "extends": ["plugin:prettier/recommended"]
}
```
### **Final Steps** 🔥
\
_Don't forget to add the Prettier extension to Visual Studio Code, if not you won't be able to see the changes._

\
_Now, you can copy the eslintrc.js config and paste it into your file to get superpowers developing with React!_



---
Made con ❤️ por [Ollebacx](https://github.com/Ollebacx) ✌️