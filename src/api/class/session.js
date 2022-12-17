/* eslint-disable no-unsafe-optional-chaining */
const { WhatsAppInstance } = require('../class/instance')
const fs = require('fs')
const path = require('path')
const logger = require('pino')()

class Session {
    async restoreSessions() {
        let restoredSessions = []
        try {
            const instances = fs.readdirSync(path.join(__dirname, `../sessiondata`))
            instances.map((file) => {
                if (file.includes('.json')) {
                    restoredSessions.push(file.replace('.json', ''))
                }
            })

            restoredSessions.map(async (key) => {
                let hook = null;
                try {
                    const webhook = fs.readFileSync("./src/api/webhook/" + key + ".json");
                    const webhookData = JSON.parse(webhook);
                    hook = webhookData.webhook;
                } catch (e) {
                    hook = null;
                }
                
                const instance = new WhatsAppInstance(key, true, hook)
                await instance.init()
                WhatsAppInstances[key] = instance
            })
        } catch (e) {
            logger.error('Error restoring sessions')
            logger.error(e)
        }
        return restoredSessions
    }
}

exports.Session = Session
