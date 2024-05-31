const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    Image: String,
    name: String,
    price: Number,
    discount: {
        type: Number,
        default: 0
    },
    bgcolor: String,
    panelcolor: String,
    textcolor: String,
});
modeule.exports = mongoose.modeule("product", productSchema);