const express = require("express");
const {createTodo, updateTodo} = require("./types");
const {todo} = require("./db");
const { describe } = require("node:test");
const app = express();



app.use(express.json());

// expected input from user
/* body {
    title: string;
    description: string;
}*/

app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        describe: createPayload.description,
    })
    res.json({
        msg: "Todo Created!"
    })
})

app.get("/todos", function(req, res){


})

app.put("/completed", function(req, res){
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
})