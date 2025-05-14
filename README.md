
# 🌐 Dynamic Community Portal Website

A full-stack community portal web application built with **Node.js**, **Express.js**, and **EJS templating**.

## Project Overview

The Community Portal provides a centralized platform where users can:
- View upcoming and previous events
- Learn more about the team
- Get in touch via a contact form

Each page is dynamically rendered using EJS, with reusable partials for headers and footers. Styling is applied consistently using a warm orange theme, and routes are handled through Express. The project structure follows best practices for modularity, readability, and maintainability.

---

## Team Members & Roles

| Name               | Role               | Responsibilities                                 |
|--------------------|--------------------|--------------------------------------------------|
| Jana Rademan       | Team Lead          | Coordination, integration                        |
| Anouk van Alphen   | Backend Developer  | Server-side logic, routing                       |
| Gideon Humphries   | Frontend Developer | Views, styling, dynamic rendering                |
| Vian Kelly         | Data Manager       | Contact form logic, event data, EJS loops        |

---

## 🗂️ Pages Breakdown

### Home Page & Thank You (Jana Rademan)
For the Community Portal project, I designed and styled both the Home and Thank You pages using EJS templates in Visual Studio Code, and I connected everything to the backend using Express routes. On the Home page (home.ejs), I included shared header and footer partials at the top and bottom to maintain consistency across the site. The home page has a welcome message and outlines the portal's purpose. I also created a dynamic Upcoming Events section using EJS templating, where events are displayed in a loop. Each event consists of a title, date, location, image, and a short description. 

To make this dynamic content work, I used an array of upcoming event objects in pageRoutes.js, each with relevant details like the title, date, and image path. I then passed this array to the home page through an Express route, allowing the events to render automatically. 

I also built a simple Thank You page (thankyou.ejs) that appears after users submit the contact form (press the send button). It displays a brief confirmation message and, like the home page, includes the shared header and footer for a consistent look and feel. I created a separate route in pageRoutes.js to serve this page when users visit /thankyou. 

Lastly, I styled the site using CSS, applying an orange color theme to the headers and footers to give the portal a happy and welcoming appearance. 

### About Page (Anouk van Alphen)
The About page dynamically renders team member profiles and a mission statement using EJS. The content is passed from the backend (index.js) to the template (about.ejs). 

This page displays information about the team (an image, name and role). This was styled using CSS grids. To populate the page I grabbed data from an array of objects rendered dynamically via EJS. The mission statement is contained within a simple HTML tag as it is just text. The images in the array containing the team information are stored in the public folder under images. 

### Events Page (Gideon Humphries)
For this project, I was responsible for building and styling the Events section. I implemented dynamic rendering of events using EJS, with data sourced from backend arrays. I created three event categories: Main Community Events, Featured Upcoming Events and Previous Events. Each event card includes a hover overlay with a styled description, and I ensured clean layout separation using reusable EJS partials. I also added logic to highlight events occurring on the current day.  

###  Contact Page (Vian Kelly)
Implemented the Contact form and its supporting routes then styled it to match the orange theme, linking the form to the backend express routes. On the contact,ejs, A POST form was used to capture the user’s Name, Email and Message and setup up corresponding routes. 

To store submissions, i made use of the temporary in-memory array in pageRoutes.js, pushing each NAME, EMAIL and message object into it before redirecting to the thank you page. 	 

Lastly, I enhanced the user experience by styling the form container with an animated warm orange gradient background and adding smooth hover transitions on the inputs and submit button. 

---

## Tech Stack

- **Node.js**
- **Express.js**
- **EJS (Embedded JavaScript Templates)**
- **HTML/CSS**
- **JavaScript**

---

## 📂 Project Structure

├── routes/
│   └── pageRoutes.js
├── views/
│   ├── pages/
│   └── partials/
├── public/
│   ├── css/
│   └── images/
├── app.js / index.js
└── package.json

<pre> ## 📁 Project Structure ```bash ├── routes/ │ └── pageRoutes.js ├── views/ │ ├── pages/ │ └── partials/ ├── public/ │ ├── css/ │ └── images/ ├── app.js / index.js └── package.json ``` </pre>

---

## 📈 GitHub Documentation

### 🔗 Repository Link  
[https://github.com/GetafixPotion/assignment1](https://github.com/GetafixPotion/assignment1)

### Merge Conflict Resolution
- Merge conflicts were resolved collaboratively.
- Team used clear commit messages and branching strategies to avoid override issues.
- When conflicts occurred (e.g., in `pageRoutes.js` and `home.ejs`), we manually reviewed differences and preserved intended logic.

### Commit History Overview
- Commits were structured around feature completion (e.g., `Add about page rendering logic`, `Style contact form`, `Implement event hover card`).
- Descriptive messages were used for clarity.
- Regular pushes and pulls ensured everyone stayed updated.

---

## How to Run the Project Locally

```bash
# Clone the repo
git clone https://github.com/GetafixPotion/assignment1.git

# Navigate into the project folder
cd assignment1

# Install dependencies
npm install

# Start the server with nodemon
npx nodemon index.js

# Visit in your browser
http://localhost:3000
