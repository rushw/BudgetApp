var mongoose = require("mongoose");

var budgetSchema = new mongoose.Schema({
    monthlySalary: Number,
    monthlyExpenses: Number,
    monthlyRetirement: Number,
    rainyDay: Number,
    monthlyInvestment: Number,
    playMoney: Number

});

module.exports = mongoose.model("Budget", budgetSchema);