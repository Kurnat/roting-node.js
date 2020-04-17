const router = require('express').Router();

router.get('/about', async (req, res) => {
    res.render('about', {
        isAbout: true
    });
});


module.exports= router;