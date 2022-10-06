const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const ReservedRoom = sequelize.define('reservedroom',{

    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    room_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
    },
    room_name:{
        type:DataTypes.STRING(50),
        allowNull:false,
    },
    detail:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    price_per_nigth:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    occupation:{
        type:DataTypes.ARRAY(DataTypes.STRING),
        allowNull:true
    }
});

module.exports = ReservedRoom;