var express      = require("express"),
    app          = express(),
    bodyParser   = require("body-parser"),
    mongoose     = require("mongoose"),
    Budget       = require("./models/budget"),
    Person       = require("./models/person"),
    seedDB       = require("./seed");

mongoose.connect("mongodb://localhost/budget");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

seedDB();

app.get("/", function(req, res){
    console.log("Landing Page");
    res.render("landing");
});

// app.get("/budget", function(req,res){
//     res.render("index");
// });

app.get("/budget/:id", function(req,res){
    var id = req.params.id;
    Person.findById(id, function(err, budget){
        if(err){
            console.log(err);
        }
        else{
            console.log(budget)
            res.render("show", {budget: budget});
        }
    })
});

app.post("/budget/", function(req, res){
    var name = req.body.name;
    var yearlySalary = req.body.yearlySalary;
    var budgetType = req.param("budgettype");
    var newBudget = {name: name, yearlySalary: yearlySalary, budgetType: budgetType};

    Person.create(newBudget, function(err, createdBudget){
       if(err){
           console.log(err);
       }
       else{
           console.log("Budget Created");
           console.log(createdBudget.budgetType);
           res.redirect("/budget/" + createdBudget._id);
       }
    });
});

app.get("/budget/:type/new", function(req, res){
    var type = req.params.type;
    console.log(type);
    if (type == "stg"){
        res.render("shortterm/new.ejs");
    }
    if (type == "ltg"){
        res.render("longterm/new.ejs");
    }
    if (type == "i"){
        res.render("invest/new.ejs");
    }

});




app.listen(3000, function () {
    console.log("Server Started");
});