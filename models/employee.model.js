const mongoose = require('mongoose');

var employeeSchema=new mongoose.Schema({
 
 name:{
     type:String,
     required:'This field is required!'
 },
 password:{
    type:String
}

})




mongoose.model('Employee',employeeSchema);


