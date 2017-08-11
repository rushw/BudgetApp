var mongoose = require("mongoose");

var personSchema = new mongoose.Schema({
    name: String,
    budgetType: String,
    yearlySalary: Number

});

module.exports = mongoose.model("Person", personSchema);