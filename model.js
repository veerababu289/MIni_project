const { mongoose } = require("mongoose");

mongoose.connect('mongodb+srv://veerababu:12345@cluster0.gwkcyhq.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{console.log("Db connected")}).catch((e) => {console.log(e)})

const schema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    confirmpassword : {
        type : String,
        required : true
    }
})

var collection = mongoose.model("registeredData",schema)

module.exports = collection