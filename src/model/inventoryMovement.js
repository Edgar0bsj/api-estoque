const database = require('../../database/database')
const User = require('../model/user')
const Product = require('../model/product')
const Invetory = require('../model/inventory')

class InventoryMovement {
    constructor(){
        this.model = database.db.define('inventoryMovement',{
            id: {
                type: database.db.Sequelize.INTERGER,
                primaryKey: true,
                autoIncrement: true
            },
            type: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            amount: {
                type: database.db.Sequelize.STRING,
                allowNull: false,
            },
            userId: {
                type: database.db.Sequelize.STRING,
                references: {
                    model: User,
                    key: "id"
                }
            },
            productId: {
                type: database.db.Sequelize.STRING,
                references: {
                    model: Product,
                    key: "id"
                }
            },
            inventoryId: {
                type: database.db.Sequelize.STRING,
                references: {
                    model: Inventory,
                    key: "id"
                }
            }
        })

        this.model.belongsTo(User, {
            foreignKey: 'userId'
        })
        this.model.belongsTo(Product, {
            foreignKey: 'ProductId'
        })
        this.model.belongsTo(Invetory, {
            foreignKey: 'inventoryId'
        })
        User.hasMany(this.model,{
            foreignKey: 'userId'
        })
        Product.hasMany(this.model,{
        foreignKey: 'ProductId'
        })
        Invetory.hasMany(this.model,{
            foreignKey: 'inventoryId'
        })
    }

}

module.exports = new InventoryMovement().model