const database = require('../../database/database')

class Product {
    constructor(){
        this.model = database.db.define('product',{
            id: {
                type: database.db.Sequelize.INTERGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            description: {
                type: database.db.Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            organizationId: {
                type: database.db.Sequelize.STRING,
                references: {
                    model: Organization,
                    key: "id"
                }
            }
        })
        this.model.belongsTo(Organization, {
            foreignKey: 'organizationId'
        })
        Organization.hasMany(this.model,{
            foreignKey: 'organizationId'
        })
    }

}

module.exports = new Product().model