var connection = require("./connection.js");

var orm =[ 
    
    {
        selectAll: function() {
            connection.query("SELECT * FROM burger_db;", function(err, data) {
                if (err) {
                    throw err;
                }

                res.render("index", {burgers: data});
            });
        }
    },

    {
        insertOne: function() {
            connection.query("INSERT INTO burgers (burger) VALUES (?);", [req.body.burger], function(err, result) {
                if (err) {
                    throw err;
                }

                res.render("/");
            });
        }
    },
    {
        updateOne: function() {
            connection.query("UPDATE burgers SET burger = (?) WHERE burgers.id = (?)", [req.body.burger, req.body.id], function(error, res) {
                if (error) {
                    throw error;
                }

                res.redirect("/");
            });
        }
    }
];

module.exports = orm;