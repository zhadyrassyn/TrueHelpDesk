const router = require('express').Router();
const authController = require('./authController');

router.use('/auth', authController);

module.exports = router;