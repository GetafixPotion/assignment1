const express = require("express");
const router = express.Router();
const events = [
  {
    title: "Community Cleanup Day",
    date: "2025-05-20",
    location: "Greenfield Park",
    image: "/images/cleanup.jpg",
  },
  {
    title: "Charity Fun Run",
    date: "2025-06-01",
    location: "Central Stadium",
    image: "/images/funrun.jpg",
  },
  {
    title: "Tech Workshop",
    date: "2025-06-10",
    location: "Library Hall",
    image: "/images/workshop.jpg",
  },
];

let submissions = [];

router.get("/", (req, res) => {
  res.render("pages/home");
});

//about page
const teamMembers = [
  {
    image: "/images/team_member1.png",
    name: "Anouk van Alphen",
    bio: "Council board president - manages the team"
  },
  {
    image: "/images/team_member2.png",
    name: "Jana Rademan",
    bio: "Council board member - head of finance"
  },
  {
    image: "/images/team_member3.png",
    name: "Vian Kelly",
    bio: "Council board member - head of events"
  },
  {
    image: "/images/team_member4.png",
    name: "Gideon Humphries",
    bio: "Council board member - contact person"
  }
];

router.get('/about', (req, res) => {
  res.render('pages/about', { teamMembers });
});


router.get("/events", (req, res) => {
  res.render("pages/events", { events });
});

router.get("/contact", (req, res) => {});
router.post("/contact", (req, res) => {
  submissions.push(req.body);
  res.redirect("/thankyou");
});
router.get("/thankyou", (req, res) => {
  res.render("pages/thankyou");
});

module.exports = router;
