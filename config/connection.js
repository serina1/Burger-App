var mysql = require("mysql");


let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "resturant_burger"
});

connection.connect(function(err) {
  if (err) {
    console.error("error : " + err.stack);
    return;
  }
  //console.log("listening to port 3306");
});

module.exports = connection;
