const {Router} = require("express")
const {CreateCardHandler} = require("../handlers/CardHandlers")
const cardRouter = Router()




cardRouter.post("/:idColumn",CreateCardHandler)

module.exports= cardRouter