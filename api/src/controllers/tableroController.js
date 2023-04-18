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

      //LA siguiente seccion se encarga de ordenar Columnas mediante el Column_order del tablero y tambien ordenar cards mediante el card_order de cada columna

      const columnOrder = tablero.Column_order;
      const orderedColumnas = [];
      columnOrder.forEach((id) => {
        const columna = tablero.Columnas.find((c) => c.id === id);
        if (columna) {
          orderedColumnas.push(columna);
        }
      });
    
      // Actualizar las columnas del tablero con el orden especificado
      tablero.Columnas = orderedColumnas;
    
      //ordenar card de cada columna mediante su card_order
    const ColumnasToOrderhisCard = tablero.Columnas
    for (let i = 0; i < ColumnasToOrderhisCard.length; i++) {
        let orderedCards=[]
        let cardOrderByColumn= ColumnasToOrderhisCard[i]
         cardOrderByColumn.card_order.forEach((id)=>{
            const card = cardOrderByColumn.Cards.find((el)=> el.id ===id)
            if(card) orderedCards.push(card)

         })   
        tablero.Columnas[i]=orderedCards         
    }
    

      return tablero;
}


const updateColumnOrderController = async(array,idTablero)=>{
    //busca el tablero por su id 
const tableroToUpdate = await Tablero.findByPk(idTablero)
//actualiza Column_order mediante su nuevo array
tableroToUpdate.update({ Column_order:array})
//el reload trae el nuevo objeto actualizado
await tableroToUpdate.reload();
//retorna el tablero actualizado
return tableroToUpdate
}

module.exports = {
    CreateTableroController,GetTableroController,updateColumnOrderController
}