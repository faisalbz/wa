const express = require('express')
const controller = require('../controllers/misc.controller')
const keyVerify = require('../middlewares/keyCheck')
const loginVerify = require('../middlewares/loginCheck')
const tokenVerify = require('../middlewares/tokenCheck')

const router = express.Router()

router.route('/onwhatsapp').get(tokenVerify, keyVerify, loginVerify, controller.onWhatsapp)
router.route('/downProfile').get(tokenVerify, keyVerify, loginVerify, controller.downProfile)
router.route('/getStatus').get(tokenVerify, keyVerify, loginVerify, controller.getStatus)
router.route('/blockUser').get(tokenVerify, keyVerify, loginVerify, controller.blockUser)
router.route('/getContacts').get(tokenVerify, keyVerify, loginVerify, controller.getContacts)

module.exports = router
