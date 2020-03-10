var mysql = require("mysql");


let connection = mysql.createConnection({
  host: "fojvtycq53b2f2kx.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
  port: 3306,
  user: "jbfsr2i4o1blxq2v",
  password: "thht32nzlec7ahqx",
  database: "	o29f91zk9fqzrypf"
});

connection.connect(function(err) {
  if (err) {
    console.error("error : " + err.stack);
    return;
  }
  //console.log("listening to port 3306");
});

module.exports = connection;
