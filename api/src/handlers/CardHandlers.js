const {
    CreateCardController
}= require("../controllers/CardControllers")

const CreateCardHandler =async (req , res)=>{
    const {idColumn} = req.params
    const { titulo_card} = req.body
    console.log(titulo_card)
    if(!idColumn)return res.status(400).send("Debes Ingresar un idColumn ")
    if(!titulo_card) return res.status(400).send("Debes ingresar titulo para la tarjeta")
    try {
        const results  = await CreateCardController(idColumn,  titulo_card)
        return res.status(200).json(results)
    } catch (error) {
     res.status(400).send(error.message)   
    }
}



module.exports = {
    CreateCardHandler
}