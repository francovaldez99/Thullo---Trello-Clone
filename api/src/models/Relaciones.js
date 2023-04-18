const {Tablero} = require("./tableroModel")
const {Columna} = require("./columnaModel")
const {Card} = require ("./cardModel")




Tablero.hasMany(Columna)
Columna.belongsTo(Tablero)


Columna.hasMany(Card)
Card.belongsTo(Columna)


module.exports={
    Tablero,Columna,Card
}