var express = require("express");
var burger = require("../burger.js");

module.exports = app.get("/", function(req, res) {
                    burger.get();
                });

                app.post("/", function(req, res) {
                    burger.post();
                });

                app.update("/", function(req, res) {
                    burger.update();
                });



