const express = require('express');
const router = express.Router();


// create a user using: POST "/api/auth". Doesn't require Aut h
router.get('/', (req, res) => {
    console.log(req.body);
    res.send("hello")
});

module.exports = router;  