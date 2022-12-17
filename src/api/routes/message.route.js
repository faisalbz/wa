const express = require('express')
const controller = require('../controllers/message.controller')
const keyVerify = require('../middlewares/keyCheck')
const loginVerify = require('../middlewares/loginCheck')
const tokenVerify = require('../middlewares/tokenCheck')
const multer = require('multer')

const router = express.Router()
const storage = multer.memoryStorage()
const upload = multer({ storage: storage, inMemory: true }).single('file')

router.route('/text').post(tokenVerify, keyVerify, loginVerify, controller.Text)
router.route('/image').post(tokenVerify, keyVerify, loginVerify, upload, controller.Image)
router.route('/video').post(tokenVerify, keyVerify, loginVerify, upload, controller.Video)
router.route('/audio').post(tokenVerify, keyVerify, loginVerify, upload, controller.Audio)
router.route('/doc').post(tokenVerify, keyVerify, loginVerify, upload, controller.Document)
router.route('/mediaurl').post(tokenVerify, keyVerify, loginVerify, controller.Mediaurl)
router.route('/button').post(tokenVerify, keyVerify, loginVerify, controller.Button)
router.route('/button2').post(tokenVerify, keyVerify, loginVerify, controller.Button2)
router.route('/poll').post(tokenVerify, keyVerify, loginVerify, controller.Poll)
router.route('/contact').post(tokenVerify, keyVerify, loginVerify, controller.Contact)
router.route('/list').post(tokenVerify, keyVerify, loginVerify, controller.List)
router.route('/setstatus').put(tokenVerify, keyVerify, loginVerify, controller.SetStatus)
router
    .route('/mediabutton')
    .post(tokenVerify, keyVerify, loginVerify, controller.MediaButton)

module.exports = router
