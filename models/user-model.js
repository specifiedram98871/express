const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/scratch", {
    
})
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        required: true,
        trim: true,
     },
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    isadmin: Boolean,
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    picture:String
})
module.exports = mongoose.model("users", userSchema);