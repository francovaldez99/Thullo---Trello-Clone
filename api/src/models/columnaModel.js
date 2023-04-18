const {DataTypes} = require("sequelize")
const database  = require("../db")


const Columna = database.define("Columna",{
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    titulo:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    card_order:{
        type:DataTypes.ARRAY(DataTypes.STRING)
    }
        
},{timestamps:false})
module.exports={Columna}