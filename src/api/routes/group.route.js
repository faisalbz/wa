const express = require('express')
const controller = require('../controllers/group.controller')
const keyVerify = require('../middlewares/keyCheck')
const loginVerify = require('../middlewares/loginCheck')
const tokenVerify = require('../middlewares/tokenCheck')

const router = express.Router()

router.route('/create').post(tokenVerify, keyVerify, loginVerify, controller.create)
router.route('/listall').get(tokenVerify, keyVerify, loginVerify, controller.listAll)
router.route('/leave').get(tokenVerify, keyVerify, loginVerify, controller.leaveGroup)

router
    .route('/inviteuser')
    .post(tokenVerify, keyVerify, loginVerify, controller.addNewParticipant)
router.route('/makeadmin').post(keyVerify, loginVerify, controller.makeAdmin)
router
    .route('/demoteadmin')
    .post(tokenVerify, keyVerify, loginVerify, controller.demoteAdmin)
router
    .route('/getinvitecode')
    .get(tokenVerify, keyVerify, loginVerify, controller.getInviteCodeGroup)

module.exports = router
