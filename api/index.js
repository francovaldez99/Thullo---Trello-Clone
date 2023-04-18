const { app } = require("./src/app");
const database=require("./src/db")
const port = process.env.port || 3001;
require("./src/models/Relaciones")


database.sync({ force: true }).then(() => {
  app.listen(3001, () => {
    console.log(`%s listening at ${port}`);
  });
});
