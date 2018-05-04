var orm = require("../orm.js");

var burger = [
    { 
        get: orm.selectAll()
   
},
    {

        post: orm.insertOne()
  
},
    {   
        update: 
            orm.updateOne()
  
}];




module.exports = burger;