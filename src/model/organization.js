const { DataTypes } = require('sequelize');
const database = require('../../database/conexao')


class Organization {
    constructor(){
        this.model = database.db.define("organization",{
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: true
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
        }
        )
    }
}


module.exports = new Organization().model