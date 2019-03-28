Enviroment has been set to be able to compile es2015

Step to initialize

mkdir my-project-name
cd my-project-name
npm init -y
mkdir src
cd src
touch index.js
npm install nodemon --save-dev
npm install @babel/core @babel/node --save-dev

add this line into package.json scripts
"start": "nodemon --exec babel-node src/index.js"

npm install @babel/preset-env --save-dev
touch .babelrc
{
  "presets": [
    "@babel/preset-env"
  ]
}