const connection = require("./connection");


const orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, objColVals, cb) {
    var queryString = "INSERT INTO ?? SET ?";
    connection.query(queryString, [table, objColVals], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {burger_name: classic, devoured: true}
  updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE ?? SET ? WHERE ?";
    connection.query(queryString, [table, objColVals, condition], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
   };

module.exports = orm;
