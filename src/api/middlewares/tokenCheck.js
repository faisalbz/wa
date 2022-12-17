const config = require('../../config/config')

function tokenVerification(req, res, next) {
    if (!req.headers.authorization) {
        return res
            .status(403)
            .send({ error: true, message: 'no token query was present' })
    }

    const token = req.headers.authorization.split(' ')[1];

    if (config.token !== token) {
        return res
            .status(403)
            .send({ error: true, message: 'invalid token supplied' })
    }
    next()
}

module.exports = tokenVerification
