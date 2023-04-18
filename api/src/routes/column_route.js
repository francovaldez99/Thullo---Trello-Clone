/**const { Router } = require("express");
const {
  countrieshandler,
  countryidhandler,countryfilterhandler
} = require("../handlers/countrieshandlers");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const countriesRouter = Router();

countriesRouter.get("/", countrieshandler);
countriesRouter.get("/search", countryfilterhandler);
countriesRouter.get("/:id", countryidhandler);
 */

const {
    columnCreateHandler,
    
}= require("../handlers/columnsHandlers")
const {Router} = require("express")
const columnRouter = Router()


columnRouter.get("/",(req,res)=>{

})
columnRouter.post("/:idTablero",columnCreateHandler)




module.exports = columnRouter