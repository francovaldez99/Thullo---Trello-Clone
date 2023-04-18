const {  DataTypes } = require("sequelize");
const database = require("../db")


const Card  = database.define("Card",{
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    titulo_card:{
        type:DataTypes.STRING,

    },
   descripcion:{
    type:DataTypes.STRING,

   },
   miembros:{
    type:DataTypes.ARRAY(DataTypes.STRING)
   },
   etiqueta:{
    type : DataTypes.STRING
   }
})

module.exports ={Card}