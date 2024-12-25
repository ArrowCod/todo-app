const mongoose = require("mongoose");

mongoose.connect("") //Put here your mongo bd credentials for use this applicationn
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}