const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const User=require('./models/User');
//https://zode-vnlks.run-us-west2.goorm.io --- replace localhost
mongoose.connect('mongodb://localhost/userData',
{ useNewUrlParser: true , useUnifiedTopology: true })
const port=8000;
const app= express();

//added by stack
// token > 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

app.use(bodyParser.json());

app.listen(port, ()=>{
	console.log(`server is listening on port:${port}`)
})

//function to go into routes for shortening code
function sendResponse(res,err,data){
  if (err){
    res.json({
      success: false,
      message: err
    })
  } else if (!data){
    res.json({
      success: false,
      message: "Not Found"
    })
  } else {
    res.json({
      success: true,
      data: data
    })
  }
}

// CREATE
app.post('/users',(req,res)=>{
  User.create(
    {
      name:req.body.newData.name,
      email:req.body.newData.email,
      password:req.body.newData.password
    },
    (err,data)=>{sendResponse(res,err,data)}
)
})

app.route('/users/:id')
// READ
.get((req,res)=>{
  User.findById(req.params.id,(err,data)=>{sendResponse(res,err,data)})
})
// UPDATE
.put((req,res)=>{
  User.findByIdAndUpdate(
    req.params.id,
    {
      name:req.body.newData.name,
      email:req.body.newData.email,
      password:req.body.newData.password
    },
    {
      new:true
    },
    (err,data)=>{sendResponse(res,err,data)})
})
// DELETE
.delete((req,res)=>{
  User.findByIdAndDelete(
    req.params.id,
    (err,data)=>{sendResponse(res,err,data)})
})