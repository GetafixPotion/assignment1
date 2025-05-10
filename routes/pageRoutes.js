const express = require('express');
const router = express.Router();

let submissions = [];

router.get('/', (req, res) => {
    res.render('pages/home');
});

router.get('/about', (req, res) => {
});

router.get('/events', (req, res) => {
});

router.get('/contact', (req, res) => {
});
router.post('/contact', (req, res) =>{
    submissions.push(req.body);
    res.redirect('/thankyou');
});
router.get('/thankyou', (req, res) => {
    res.render('pages/thankyou');
});

module.exports = router;
