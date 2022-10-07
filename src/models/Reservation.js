const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const Reservation = sequelize.define('reservation',{

    id:{
        type: DataTypes.UUID,
        /* defaultValue: DataTypes.UUIDV4, */
        allowNull: false,
        primaryKey: true,
    },
    status:{
        type:DataTypes.STRING,
        defaultValue: 'pending',
        emun: ['pending',"paid","cancelled"],
        allowNull:false
    },
    costumer_name:{
        type:DataTypes.STRING(50),
        allowNull: false,
    },
    costumer_lastname:{
        type:DataTypes.STRING(50),
        allowNull: false,
    },
    phone_number:{
        type:DataTypes.STRING(50),
        allowNull: false,
    },
    total_days:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    total_price:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    payment_method:{
        type:DataTypes.STRING,
        emun: ['cash',"creditcard","debitcard"],
        allowNull:false
    },
    initial_date:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    final_date:{
        type:DataTypes.DATE,
        allowNull:false,
    }
})

module.exports = Reservation;