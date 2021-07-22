const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/summertask", 
{useNewUrlParser: true, useUnifiedTopology: true}
).then(() => {console.log("CONNECTED")})
.catch((e) => {console.log("ERROR")})