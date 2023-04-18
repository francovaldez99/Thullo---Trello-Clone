const { Sequelize } = require("sequelize");
require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST , DB_DEPLOY } = process.env;
const database=new Sequelize( `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/thullo`,{
    logging:false
})


module.exports=database