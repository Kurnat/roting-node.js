'use strict';
const router = require('express').Router();
const auth = require('../middlewears/authorization');

router.get('/logout', auth, async (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

module.exports = router;