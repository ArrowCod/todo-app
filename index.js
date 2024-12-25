const express = require("express");
const app = express();

app.use(express.json());

// expected input from user
/* body {
    title: string;
    description: string;
}*/

app.post("/todo", function(req, res){

})

app.get("/todos", function(req, res){

})

app.put("/completed", function(req, res){

})