const { Router } = require("express");
const mainRouter = Router();
const columnRouter = require("./column_route");
const cardRouter = require("./card_router");
const {TableroRouter} = require("./tablero_router")




mainRouter.use("/columns",columnRouter)

mainRouter.use("/cards",cardRouter)

mainRouter.use("/tablero",TableroRouter)

module.exports=mainRouter;


/**
 * const countriesRouter = require("./countriesRouter");
const ActivitiesRouter = require("./ActivitiesRouter");

const { Router } = require("express");
const mainRouter = Router();

mainRouter.use("/countries", countriesRouter);
mainRouter.use("/activities", ActivitiesRouter);

module.exports = mainRouter;

 */