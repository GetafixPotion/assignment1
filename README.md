
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
- Used EJS for dynamic Upcoming Events rendering via an array passed through routes.
- Included header/footer partials for consistent styling.
- Styled with a warm orange theme.
- Thank You page displays after form submission.

### About Page (Anouk van Alphen)
- Displays team members using a dynamically rendered array.
- Mission statement styled simply.
- Layout styled using CSS Grid.
- Images sourced from `/public/images`.

### Events Page (Gideon Humphries)
- Contains 3 categories:
  - Community Events
  - Upcoming Featured Events
  - Previous Events
- Hover overlays added to event cards for descriptions.
- Today’s event dynamically highlighted.

###  Contact Page (Vian Kelly)
- POST form captures Name, Email, and Message.
- Data stored in a temporary in-memory array.
- Smooth transitions and animated orange gradient background.

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
│ └── pageRoutes.js
├── views/
│ ├── pages/
│ └── partials/
├── public/
│ ├── css/
│ └── images/
├── app.js / index.js
└── package.json


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
