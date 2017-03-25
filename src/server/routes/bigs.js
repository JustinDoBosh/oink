const express = require('express');

const controller = require('../controllers/bigs_ctrl');
const router = express.Router();

//authenticates a user
router.get('/bigs/find', controller.find)
router.post('/bigs/add', controller.add)

module.exports = router