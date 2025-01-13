class ApiInventory {
    async FindById(req, res) {
        try {
            const {id} = req.params
            const inventories = {}

            res.status(200).send({inventories})
        } catch (error) {
            res.status(500).send({msg: error.message})
            
        }
    }
    async FindAll(req, res) {
        try {
            const inventories = [{}]

            res.status(200).send({inventories})
        } catch (error) {
            res.status(500).send({msg: error.message})
            
        }
    }
    async Create(req, res) {
        try {
            const {id} = req.params
            const inventories = {}

            res.status(200).send({inventories})
        } catch (error) {
            res.status(500).send({msg: error.message})
            
        }
    }
    async Update(req, res) {
        try {
            const {id} = req.params
            const inventories = {}

            res.status(200).send({inventories})
        } catch (error) {
            res.status(500).send({msg: error.message})
            
        }
    }
    async Delete(req, res) {
        try {
            const {id} = req.params
            const inventories = {}

            res.status(200).send({inventories})
        } catch (error) {
            res.status(500).send({msg: error.message})
            
        }
    }
}

module.exports = new ApiInventory()