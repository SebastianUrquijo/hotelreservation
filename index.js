const server = require("./src/app.js");
const sequelize = require("./src/db.js");
const relations = require("./src/relations.js")

relations()

server.listen(process.env.PORT || 3001, () => {
  sequelize
    .sync({ force: true })
    .then(console.log("Conectado a la base de datos"))
    .then(console.log('Listening at 3001'))
    .catch((e) => console.log(e));
});