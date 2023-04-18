const {Card} = require("../models/cardModel")


const CreateCardController = async (idColumn, titulo_card) =>{
const results = await Card.create({  titulo_card:titulo_card})
await results.setColumna(idColumn)
return results
}


module.exports = {
    CreateCardController
}