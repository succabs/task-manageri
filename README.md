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

I also need the button to copy the content of the task to send it easily to my mentor on Slack.

## How to install

1. Clone the repository
2. run 'npm -i' on the folder

NOTE: Tauri has a lot of dependencies, so the folder size is somewhere around 3GB.

## How to use

Development:
npm run tauri dev

Build:
npm run tauri build

## Requirements

<https://tauri.app/v1/guides/getting-started/prerequisites>

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
