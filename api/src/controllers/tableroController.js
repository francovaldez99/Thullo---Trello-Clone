const {Tablero, Columna, Card} = require("../models/Relaciones")


const  CreateTableroController = async(  nombre_tablero )=>{
const result = await Tablero.create({ nombre_tablero })

return result
}

const  GetTableroController = async (idTablero)=>{
    const tablero = await Tablero.findByPk(idTablero, {
        include: [
          {
            model: Columna,
            include: [
              {
                model: Card,
              },
            ],
          },
        ],
      });
      return tablero;
}
module.exports = {
    CreateTableroController,GetTableroController
}