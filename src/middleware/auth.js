const jwt = require('jsonwebtoken')
const user = require('../service/user')

const secretkey = 'MeuSegredoForte'

function authMiddleware(role = null) {
    return (req, res, next) => {
        const token = req.headers["authorization"]

        if (!token) {
            res.status(400).json({ msg: "Token inválido" })
            return
        }

        jwt.verify(token, secretkey, async (err, decoded) => {
            if (err) {
                res.status(400).json({ msg: "Token inválido" })
                return
            }

            const verify = await user.Verify(decoded.id, decoded.role)

            if (!verify || (role && !role.includes(decoded.role))) {
                res.status(401).json({ msg: "Permissão negada - Sem permissão" })
                return
            }
            req.session = decoded
            next()
        })

    }
}

module.exports = authMiddleware