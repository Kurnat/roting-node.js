'use strict';
const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('index', {
        isHome: true
    })
})

module.exports = router;