# Frontend Developer Hiring Test 2024: Create Brand Flow

This project uses [htmx](https://htmx.org/) to create a dynamic and responsive web application. It features a multi-step form process that interacts with the server to progressively load content without full page reloads.


## Project Structure

```
htmx
├── package-lock.json
├── package.json
├── Readme.md
├── server.js
├── src
│ ├── components
│ │ ├── Step1.html
│ │ ├── Step2.html
│ │ ├── Step3.html
│ │ └── success-dialog.html
│ ├── index.html
│ ├── main.js
│ └── styles
│ ├── main.css
│ ├── output.css
│ └── tailwind.css
├── tailwind.config.js
└── webpack.config.js
```


## Technical Stack

- **HTML5**: For structuring the web page.
- **CSS3 & Tailwind CSS**: For styling the application.
- **Vanilla JavaScript & jQuery**: For minimal interactivity as needed.

## How To Run

```bash
npm start
```

This will start the local server at http://localhost:3000.