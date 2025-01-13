class ApiUser {
    async FindById(req, res) {
        try {
            const {id} = req.params
            const user = {}

            res.status(200).send({user})
        } catch (error) {
            res.status(500).send({msg: error.message})
            
        }
    }
    async FindAll(req, res) {
        try {
            const users = [{}]

            res.status(200).send({user})
        } catch (error) {
            res.status(500).send({msg: error.message})
            
        }
    }
    async Create(req, res) {
        try {
            const {id} = req.params
            const user = {}

            res.status(200).send({user})
        } catch (error) {
            res.status(500).send({msg: error.message})
            
        }
    }
    async Update(req, res) {
        try {
            const {id} = req.params
            const user = {}

            res.status(200).send({user})
        } catch (error) {
            res.status(500).send({msg: error.message})
            
        }
    }
    async Delete(req, res) {
        try {
            const {id} = req.params
            const user = {}

            res.status(200).send({user})
        } catch (error) {
            res.status(500).send({msg: error.message})
            
        }
    }
}

module.exports = new ApiUser()