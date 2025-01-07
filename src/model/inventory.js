const database = require('../../database/database')

class Inventory {
    constructor(){
        this.model = database.db.define('inventories',{
            id: {
                type: database.db.Sequelize.INTERGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: database.db.Sequelize.STRING,
                allowNull: false
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

module.exports = new Inventory().model