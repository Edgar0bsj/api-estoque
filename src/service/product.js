const ModelProduct = require('../model/product')

class ServiceProduct {
    async FindById(organizationId, id, transaction) {
        return ModelProduct.findOne(
            { where: { organizationId, id } },
            { transaction }
        )
    }
    async FindAll(organizationId, transaction) {
        return ModelProduct.findAll(
            { where: { organizationId } },
            { transaction }
        )
    }
    async Create(organizationId, name, description, transaction) {
        if (!organizationId) {
            throw new Error('Favor informar o campo OrganizationId')
        } else if (!name) {
            throw new Error('Favor informar o campo Name')
        } else if (!description) {
            throw new Error('Favor informar o campo Descrição')
        }

        return ModelProduct.create(
            {
                organizationId,
                name,
                description
            },
            { transaction }
        )
    }
    async Update(organizationId, id, name, description, transaction) {
        const oldProduct = await this.FindById(organizationId, id, transaction)

        if(!oldProduct){
            throw new Error('Produto não encontrado')
        }

        oldProduct.name = name || oldProduct.name
        oldProduct.description = description || oldProduct.description

        return oldProduct.save({ transaction })


    }
    async Delete(organizationId, id, transaction) {
        const oldProduct = await this.FindById(organizationId, id, transaction)

        if (!oldProduct) {
            throw new Error('Produto não encontrado')
        }

        await oldProduct.destroy({ transaction })
    }
}

module.exports = new ServiceProduct()