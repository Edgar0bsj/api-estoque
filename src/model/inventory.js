const { DataTypes } = require('sequelize');
const database = require('../../database/conexao');
const Organization = require('./organization');


class Inventory {
    constructor(){
        this.model = database.db.define("inventories",{
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            organizationId: {
                type: DataTypes.INTEGER,
                references: {
                    model: Organization,
                    key: "id"
                }
            },
        })
        this.model.belongsTo(Organization,{
            foreignKey: 'organizationId'
        })
        Organization.hasMany(this.model, {
            foreignKey: 'organizationId'
        })
    }
}


module.exports = new Inventory().model