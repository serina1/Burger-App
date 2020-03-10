const orm = require("../config/orm");

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burger, cb) {
    orm.insertOne("burgers", burger, function(res) {
      cb(res);
    });
  },
  updateOne: function(burger, condition, cb) {
    orm.updateOne("burgers", burger, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
