const { Router } = require("express")

const {
    CreateTableroHandler,
    getTableroHandler,
    updateColumnOrderHandler
} = require("../handlers/TableroHandler")
const TableroRouter = Router()


TableroRouter.get("/:idTablero",getTableroHandler)

TableroRouter.post("/",CreateTableroHandler)

TableroRouter.put("/update-column-order/:idTablero",updateColumnOrderHandler)

module.exports = {
    TableroRouter
}