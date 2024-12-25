const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://deepakcode21:5TKUdMdooxejiZvg@cluster0.0fcp5.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}