const {
    CreateColumnController
}= require("../controllers/columnController")


const columnCreateHandler = async (req , res )=>{
    const {titulo} = req.body
    const {idTablero}= req.params
 if (!titulo) return res.status(400).json("falta titulo para la columna")
 if(!idTablero) return res.status(400).json("falta la idTablero")
    try {
        const result = await CreateColumnController(idTablero,titulo)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).send(error.message)
    }


}




module.exports = {
    columnCreateHandler
}