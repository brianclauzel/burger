var orm = require("../orm.js");

var burger = [
    { 
        get: app.get("/", function(req, res) {
            orm.selectAll();
    })
},
    {

        post: app.post("/", function(req, res) {
            orm.insertOne();
    })
},
    {   
        update: app.update("/", function(req, res) {
            orm.updateOne();
    })
}];

module.exports = burger;