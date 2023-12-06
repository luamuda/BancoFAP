const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: ' database.db'
})

const Student = sequelize.define('Student', {
    matricula: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nota1: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    nota2: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    nota3: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    media: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },

});

sequelize.sync();

module.exports = {Student, sequelize};