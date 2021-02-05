const express =require('express');
var router=express.Router();
const mongoose =require('mongoose');
const Employee =mongoose.model('Employee');

router.get('/',(req,res)=>{
    res.render("employee/addOrEdit",{
        viewTitle:"Insert Employee"
    });
});

function updateRecord(req,res){
    Employee.findOneAndUpdate(
       { _id:req.body._id},req.body,{new:true},(err,doc)=>{
           if(!err){
               res.redirect('employee/list');
           }
           else{
               console.log('update error'+err);
           }
       }
    )
}
router.post('/',(req,res)=>{
    if(req.body._id==""){
        insertRecord(req,res);}
    else{
        updateRecord(req,res);
    }
   
});

function insertRecord(req,res){
  var employee = new Employee();
  employee.name=req.body.name;
  employee.password=req.body.password;

 


  employee.save((err,doc) => {
      if(!err){
       res.redirect('employee/list');}
       else{
           console.log('error'+err);
       }
  });
}

router.get('/list',(req,res)=>{

    Employee.find((err,docs)=>{
          if(!err){
              res.render("employee/list",{
                  list:docs
              });
          }
          else{
              console.log('error'+err)
          }
    });
});

router.get('/:id',(req,res)=>{
   
    Employee.findById(req.params.id,(err,doc)=>{
      if(!err){
          res.render("employee/addOrEdit",{
            viewTitle:"update employee",
            employee:doc
          });


      }


    });

});

router.get('/delete/:id',(req,res)=>{
    Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.redirect('/employee/list');
        }
        else{
            console.log('delete error'+err);
        }
    })
})



module.exports =router;