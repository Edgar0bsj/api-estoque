const database = require('../../database/database')

class Organization {
    constructor(){
        this.model = database.db.define('organization',{
            id: {
                type: database.db.Sequelize.INTERGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            address: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            phone: {
                type: database.db.Sequelize.STRING,
                allowNull: true
            },
            email: {
                type: database.db.Sequelize.STRING,
                allowNull: false,
                unique: true
            },

        })
    }
}

module.exports = new Organization().model