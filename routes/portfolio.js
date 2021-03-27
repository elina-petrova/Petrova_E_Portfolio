var express = require('express');
var router = express.Router();

router.get('/work-lrg', function (req, res, next) {
    res.render('work-lrg', { title: 'Lrg' });
});

router.get('/work-second', function (req, res, next) {
    res.render('work-second', { title: 'Lrg' });
});

router.get('/work-third', function (req, res, next) {
    res.render('work-third', { title: 'Lrg' });
});


module.exports = router;
