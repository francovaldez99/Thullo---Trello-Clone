const {CreateTableroController,GetTableroController} = require("../controllers/tableroController")



const CreateTableroHandler =async (req,res)=>{
const {  nombre_tablero } = req.body
if(!nombre_tablero) return res.status(400).send("falta un  nombre_tablero")

try {
    const result = await CreateTableroController(nombre_tablero)
    res.status(200).json(result)
} catch (error) {
    
}
}


const getTableroHandler =async (req,res)=>{
const {idTablero} = req.params
if(!idTablero) return res.status(400).send("Ingrese idTablero")
try {
const result = await GetTableroController(idTablero)
return res.status(200).json(result)
    
} catch (error) {
    res.status(400).send(error.message)
}
}

module.exports = {
    CreateTableroHandler,
    getTableroHandler
}