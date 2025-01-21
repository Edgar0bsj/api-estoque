const crypto = require('crypto')

function generationPassword(){
    return crypto.randomBytes(18).toString('hex')
}

module.exports = generationPassword