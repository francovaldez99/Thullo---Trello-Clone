const {  DataTypes } = require("sequelize");
const database = require("../db")

const Tablero = database.define("Tablero",{
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false

    },
    nombre_tablero:{
type:DataTypes.STRING,

    },
 Column_order:{
        type:DataTypes.ARRAY(DataTypes.STRING)
},
portada_url:{
type:DataTypes.STRING
}

},{timestamps:false})


module.exports={Tablero}