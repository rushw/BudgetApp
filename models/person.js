var mongoose    = require("mongoose");

var personSchema = new mongoose.Schema({
    name: String,
    budgetType: String,
    yearlySalary: Number,
    budget:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Budget"
        }


});

module.exports = mongoose.model("Person", personSchema);