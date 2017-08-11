var Person       = require("./models/person");

var data = [
    {
        name: "Roshane Williams",
        budgetType: "STG",
        yearlySalary: 50000
    }
]

function seedDB(){
    Person.remove({}, function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("removed person");
            Person.create(data, function(err, budget){
                if(err){
                    console.log(err);
                }
                else{
                    console.log("added person")
                }
            });
        }
    });
}

module.exports = seedDB;