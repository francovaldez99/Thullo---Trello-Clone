const { Router } = require("express")

const {
    CreateTableroHandler,
    getTableroHandler
} = require("../handlers/TableroHandler")
const TableroRouter = Router()


TableroRouter.get("/:idTablero",getTableroHandler)
TableroRouter.post("/",CreateTableroHandler)



module.exports = {
    TableroRouter
}