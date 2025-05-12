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

router.get("/about", (req, res) => {});

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
