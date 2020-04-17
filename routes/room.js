'use strict';
const router = require('express').Router();
const auth = require('../middlewears/authorization');

router.get('/room', auth, async (req, res) => {
res.render('room',{
    isRoom: true
})
});

module.exports = router;