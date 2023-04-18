const {Card,Columna} = require("../models/Relaciones")


const CreateCardController = async (idColumn, titulo_card) =>{
    //create una card
const cardCreated = await Card.create({  titulo_card:titulo_card})
//asocia esa card a esa columna 
await cardCreated.setColumna(idColumn)
//busca esa columna
const ColumnaUpdate = await Columna.findByPk(idColumn)
//verfica que la columna exista , si existe la actualiza con el id 
const cardOder = ColumnaUpdate.card_order ? [...ColumnaUpdate.card_order,cardCreated.id] : [cardCreated.id]
//actualiza card_order de la Columna 
await Columna.update(
    {card_order:cardOder},
    {where : {
        id:ColumnaUpdate.id
    }})
     //regresa la tarjeta creada
return cardCreated
}





module.exports = {
    CreateCardController
}