const {
    Columna,Tablero
} = require("../models/Relaciones")

const CreateColumnController =async (idTablero,titulo)=>{
    //Crea Columna 
const createColumnd = await Columna.create({titulo})
//Asociar la columna al tablero 
await createColumnd.setTablero(idTablero)
//trae el tablero mediante su id
const tablero = await Tablero.findByPk(idTablero)
//actualiza columnOrder del tablero y agrega el id de la nueva columna
const columnOrder =tablero.Column_order ? [...tablero.Column_order, createColumnd.id] : [createColumnd.id]

tablero.update({Column_order:columnOrder},
    {where:{
    id:idTablero
}})
//regresa la nueva columna
return createColumnd

}

const updateCardOrderController = async(newArr , idColumna)=>{
const columna =await Columna.findByPk(idColumna)
await columna.update({
    card_order:newArr
})
await columna.reload()
return columna
}





module.exports={
    CreateColumnController,
    updateCardOrderController
}