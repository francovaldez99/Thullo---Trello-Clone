const {
    Columna
} = require("../models/Relaciones")

const CreateColumnController =async (idTablero,titulo)=>{
    console.log(titulo)
const result = await Columna.create({titulo})
await result.setTablero(idTablero)
return result

}








module.exports={
    CreateColumnController
}