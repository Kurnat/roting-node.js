'use strict';
const router = require('express').Router();

router.get('/login', async (req, res) => {
    res.render('login', {
        isLogin: true
    });
});

router.post('/login', async (req,res) => {
    req.session.isAuthenticated = true;
    res.redirect('/')
});

module.exports = router;