require('dotenv').config()
const express = require('express')
const massive = require('massive')
const products_controller = require("./products_controller")

const app = express();

const {SERVER_PORT, CONNECTTION_STRING} = process.env;

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance);
})
.catch(err => console.log()
);

app.use(express.json());

app.post('/api/products', products_controllr.create);
app.get('/api/products', products_controller.getAll);
app.get('/api/products:id', products_controller.getOne);
app.put('/api/prodicts/:id', products_controller.delete);

app.listen(SERVER_PORT, () => {
    Console.LOG(`Server listening on port ${SERVER_PORT}.`);
});