var express      = require("express"),
    app          = express(),
    bodyParser   = require("body-parser"),
    spawn        = require("child_process").spawn;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// function Budget(monthlySalary, monthlyExpenses, monthlyRetirement, rainyDay, monthlyInvestment, playMoney){
//     this.monthlySalary = monthlySalary;
//     this.monthlyExpenses = monthlyExpenses;
//     this.monthlyRetirement = monthlyRetirement;
//     this.monthlyInvestment = monthlyInvestment;
//     this.rainyDay = rainyDay;
//     this.playMoney = playMoney;
// }

function Person(name, yearlySalary, budgetType, budget) {
    this.name = name;
    this.yearlySalary = yearlySalary;
    this.budgetType = budgetType;
    this.budget = budget;
}

app.get("/", function(req, res){
    console.log("Landing Page");
    res.render("landing");
});

app.get("/budget", function(req,res){
    var process = spawn('python',["app.py", req.query.yearlySalary, req.query.budgetType]);
    process.stdout.on('data', function (data){
        // console.log(data.toString('utf8'));
        // console.log(JSON.parse(data));
        console.log(req.query.budgetType)
        var budget = JSON.parse(data);
        var person = new Person(req.query.name, req.query.yearlySalary, req.query.budgetType, budget);
        res.locals.person = person;
        res.render("show");
    });
});

app.post("/budget/", function(req, res){
    var name = req.body.name;
    var yearlySalary = req.body.yearlySalary;
    var budgetType = req.query.type;

    res.redirect("/budget/?name=" + name + "&yearlySalary=" + yearlySalary + "&budgetType=" + budgetType);
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