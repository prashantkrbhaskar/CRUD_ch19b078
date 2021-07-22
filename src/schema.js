const mongoose = require("mongoose");

const { Schema } = mongoose;

const productsSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    
    name: {
        type: String,
        minlenght: 2,
        required: true
    },
    email : {
        type: String,
        minlenght: 4,
        required: true
    },
  })

module.exports = productsSchema