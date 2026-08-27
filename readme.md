# To-Do List Website

A simple and user-friendly **To-Do List website** built using **HTML, CSS, and JavaScript**. The application allows users to add, edit, complete, and close tasks while keeping their tasks saved using the browser's `localStorage`.

## Features

* Displays a **heading** for the To-Do List.
* Displays the **current date** in month, date, and year format.
* Allows users to **add new tasks** using the Add button.
* Allows users to **mark tasks as completed**.
* Allows users to **close/delete completed tasks**.
* Allows users to **edit existing tasks**.
* Uses the browser's **localStorage** to persist tasks.
* Tasks remain available even after:

  * Refreshing the browser.
  * Closing and reopening the browser.
* Provides a simple and intuitive user interface.

## Technologies Used

* **HTML** – Used to create the structure of the website.
* **CSS** – Used for styling and designing the user interface.
* **JavaScript** – Used to add functionality and manage tasks.
* **localStorage** – Used to store tasks in the browser so that they persist between sessions.

## How It Works

1. The website displays the To-Do List heading and the current date.
2. The user enters a task and clicks the **Add** button.
3. The task is added to the To-Do List and saved in `localStorage`.
4. Users can edit a task whenever needed.
5. Once a task is completed, the user can mark it as completed and close/delete it.
6. Because tasks are stored in `localStorage`, they remain available after refreshing or reopening the browser.

## Data Persistence

The application uses the browser's `localStorage` API to save tasks.

This means the task data is stored locally in the user's browser and does not require a database or server.

> **Note:** Tasks are stored only in the browser where they were created. Clearing the browser's local storage or site data will remove the saved tasks.

## Project Structure

```text
To-Do-List/
│
├── index.html
├── style.css
└── script.js
|-- images/
|-- readme.md
```

## Getting Started

1. Clone or download the project.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Start adding and managing your tasks.

## License

This project is created for learning and personal use.
