var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    next();
});

module.exports = router;