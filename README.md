# task-manageri

A very zen todo / task app made with Tauri and React. Uses sqlite as a database. No cloud, nothing fancy - just a todo app to help me keep track of my daily job tasks.

## Functionality

- List of tasks with the ability to create a new task and archive/delete tasks
- Task view
- Task has premade fields tailored to my specific needs, fields can be hidden/shown in settings on particular task
- Share button that copies the content of task to clipboard for sending the details of current status of task to a wiser senior developer who can help me
- Task will be saved automatically to database, no need for save button - zen
- Undo-button in case of mistakes (new version as a new task on database? easy to revert to before?)

## Why another todo app?

I am not happy using Apple Notes and too poor to pay for an app - I decided to make one by myself to suit my exact needs.

## Design of the structure

Electron and React are both on their own folders to keep them separate and to have more clear structure.
While developing Electron.js loads the React.js dev server. When ready for production, bundle the compiled React.js app when and package the app into an executable. React project structure is made with Vite.

## How to install

1. Clone the repository

## Development

On folder /eletron-app/main.js comment out the line with loadFile and uncomment loadURL

//mainWindow.loadFile('index.html'); //prod
mainWindow.loadURL('http://localhost:3000'); //dev

- Open 2 terminal windows
- On 1st window run 'npm run dev' from the /react-app -folder
- On 2nd window run 'npm start' from the /electron-app folder

## Requirements

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
