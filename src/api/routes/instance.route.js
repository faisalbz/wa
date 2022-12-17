const express = require('express')
const controller = require('../controllers/instance.controller')
const tokenVerify = require('../middlewares/tokenCheck')
const keyVerify = require('../middlewares/keyCheck')
const loginVerify = require('../middlewares/loginCheck')

const router = express.Router()
router.route('/init').get(tokenVerify, controller.init)
router.route('/qr').get(tokenVerify, keyVerify, controller.qr)
router.route('/qrbase64').get(tokenVerify, keyVerify, controller.qrbase64)
router.route('/info').get(tokenVerify, keyVerify, controller.info)
router.route('/restore').get(tokenVerify, tokenVerify, controller.restore)
router.route('/logout').delete(tokenVerify, keyVerify, loginVerify, controller.logout)
router.route('/delete').delete(tokenVerify, keyVerify, loginVerify, controller.delete)
router.route('/list').get(tokenVerify, tokenVerify, controller.list)

module.exports = router
