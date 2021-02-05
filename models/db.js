const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost:27017/testDB',{useNewUrlParser:true},(err)=>{
    if(!err){console.log('Mongodb connection success')}
    else{console.log('Error in DB'+err)}
});

require('./employee.model');