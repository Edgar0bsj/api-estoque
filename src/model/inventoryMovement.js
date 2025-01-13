const { DataTypes } = require('sequelize');
const database = require('../../database/conexao');
const User = require('./user');
const Product = require('./product');
const Inventory = require('./inventory');


class InventoryMovement {
    constructor(){
        this.model = database.db.define("inventory_movement",{
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            type: {
                type: DataTypes.STRING,
                allowNull: false
            },
            amount: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            userId: {
                type: DataTypes.INTEGER,
                references: {
                    model: User,
                    key: "id"
                }
            },
            productId: {
                type: DataTypes.INTEGER,
                references: {
                    model: Product,
                    key: "id"
                }
            },
            inventoryId: {
                type: DataTypes.INTEGER,
                references: {
                    model: Inventory,
                    key: "id"
                }
            },
        })
        this.model.belongsTo(User,{
            foreignKey: 'userId'
        })
        this.model.belongsTo(Product,{
            foreignKey: 'productId'
        })
        this.model.belongsTo(Inventory,{
            foreignKey: 'inventoryId'
        })
        User.hasMany(this.model, {
            foreignKey: 'userId'
        })
        Product.hasMany(this.model, {
            foreignKey: 'productId'
        })
        Inventory.hasMany(this.model, {
            foreignKey: 'inventoryId'
        })
    }
}


module.exports = new InventoryMovement().model