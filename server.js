const express = require("express");

const port = process.env.port || 8080;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require ("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("./controllers/burger-controller");

app.use(routes);

app.listen(port, function ()  {
    console.log(`server is now active:http://localhost:${port}`)
});



