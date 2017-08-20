var Person       = require("./models/person"),
    Budget       = require("./models/budget"),
    mongoose     = require("mongoose");

var createBudget = {
        monthlySalary : 100,
        monthlyExpenses : 100,
        monthlyRetirement : 400,
        rainyDay : 944,
        monthlyInvestment : 400,
        playMoney : 300
    }

var data = [
    {
        name: "Roshane Williams",
        budgetType: "STG",
        yearlySalary: 50000,
        budget: mongoose.Types.ObjectId()
    }
]

function seedDB(){
    Person.remove({}, function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("removed person");
            Person.create(data, function(err, person){
                if(err){
                    console.log(err);
                }
                else{
                    Budget.create(createBudget, function(err, newbudget){
                        if(err){
                            console.log(err)
                        }
                        else{
                            person.budgets.push(newbudget);
                            person.save();
                            console.log("added person")
                        }
                    });
                    console.log(person)
                }
            });
        }
    });
}

module.exports = seedDB;