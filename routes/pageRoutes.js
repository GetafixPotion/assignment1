const express = require("express");
const router = express.Router();
const today = new Date().toISOString().split("T")[0];


//#region data arrays
const events = [
  {
    title: "Community Cleanup Day",
    date: "2025-05-20",
    location: "Greenfield Park",
    image: "/images/cleanup.jpg",
    description: "Help us clean up our local park and make a difference together!"
  },
  {
    title: "Charity Fun Run",
    date: "2025-06-01",
    location: "Central Stadium",
    image: "/images/funrun.jpg",
    description: "Join our 5K fun run to raise funds for children's education."
  },
  {
    title: "Tech Workshop",
    date: "2025-06-10",
    location: "Library Hall",
    image: "/images/workshop.jpg",
    description: "Explore web development, AI tools, and cybersecurity basics in this hands-on workshop."
  }
];

const upcomingEvents = [
  {
    title: "Food Drive Collection Week",
    date: "2025-05-26",
    location: "Radlof Park",
    image: "/images/foodcollection.jpg",
    description: "Help collect non-perishable goods for local shelters. Every can counts!"
  },
  {
    title: "Senior Companion Day",
    date: "2025-06-05",
    location: "Central Stadium",
    image: "/images/elderly.jpg",
    description: "Spend the day sharing stories, laughter, and games with our senior citizens."
  },
  {
    title: "Community Talent Show",
    date: "2025-06-13",
    location: "The Fugard",
    image: "/images/talent.jpg",
    description: "Join us for a night of fun and entertainment as local talents take the stage!"
  }
];


const previousEvents = [
  {
    title: "Neighbourhood Movie Night",
    date: "2025-02-14",
    location: "Community Center Lawn",
    image: "/images/movienight.jpg",
    description: "A cozy evening under the stars watching family-friendly films."
  },
  {
    title: "Public Safety Awareness Day",
    date: "2025-03-02",
    location: "Main Street Plaza",
    image: "/images/safety.jpg",
    description: "Learn about safety tips, first aid, and meet your local heroes!"
  },
  {
    title: "Spring Planting Workshop",
    date: "2025-03-20",
    location: "Town Garden",
    image: "/images/planting.jpg",
    description: "Get your hands dirty and learn how to start your own vegetable garden."
  },
  {
    title: "Local Artists Gallery Night",
    date: "2025-04-10",
    location: "Civic Hall",
    image: "/images/gallery.jpg",
    description: "An exhibition of inspiring art pieces by community talent."
  },
  {
    title: "Youth Coding Bootcamp",
    date: "2025-04-25",
    location: "Tech Center",
    image: "/images/coding.jpg",
    description: "Teens learned the fundamentals of coding with fun projects."
  },
  {
    title: "Earth Day Festival",
    date: "2025-04-22",
    location: "Riverbank Park",
    image: "/images/earthday.jpg",
    description: "Celebrate our planet with eco-friendly activities and food trucks."
  }
];


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

//#endregion

//home page
router.get("/", (req, res) => {
  res.render("pages/home", { upcomingEvents });
});

//about page
router.get('/about', (req, res) => {
  res.render('pages/about', { teamMembers });
});

//events page
router.get("/events", (req, res) => {
  res.render("pages/events", { events, previousEvents, upcomingEvents, today });
});

// Sort events by date
events.sort((a, b) => new Date(a.date) - new Date(b.date));
previousEvents.sort((a, b) => new Date(b.date) - new Date(a.date)); // recent past first


//contact page and thank you page
let submissions = [];
router.get("/contact", (req, res) => {
  res.render("pages/contact");
});

router.post("/contact", (req, res) => {
  submissions.push(req.body);
  res.redirect("/thankyou");
});
router.get("/thankyou", (req, res) => {
  res.render("pages/thankyou");
});

module.exports = router;
