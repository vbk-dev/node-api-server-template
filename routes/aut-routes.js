const router = require('express').Router();

const {sendMessage} = require('../controllers/auth-controller');

router.get('/', sendMessage);

module.exports = router;
