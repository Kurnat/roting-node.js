'use strict';
const router = require('express').Router();

router.get('/register', async (req, res) => {
    res.render('register',{
        isLogin: true
    });
});

router.post('/register', async (req,res) => {
    res.redirect('/login');
});

module.exports = router;
