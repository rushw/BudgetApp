var mongoose = require("mongoose");

var budgetSchema = new mongoose.Schema({
    name: String,
    budgetType: String,
    yearlySalary: Number,
    monthlySalary: Number,
    monthlyExpenses: Number,
    monthlyRetirement: Number,
    rainyDay: Number,
    monthlyInvestment: Number,
    playMoney: Number

});

module.exports = mongoose.model("Budget", budgetSchema);