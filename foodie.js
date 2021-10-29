const express=require("express");
const mongoose = require("mongoose");
const  bodyParser = require("body-parser");
const {connected} = require("process");
const { boolean } = require("webidl-conversions");
const path=require("path");
const { EDESTADDRREQ } = require("constants");
const foodie=express();
const port=80; 
var conn = mongoose.Collection;
var mongo=mongoose.connect("mongodb://localhost:27017/meg_shi",{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>console.log("connection sucessful...."))
.catch((err)=>console.log("err"));
foodie.use('/static',express.static('static'))
foodie.use(express.urlencoded())

foodie.set('view engine','pug')
foodie.set('views',path.join(__dirname,'views'))

foodie.get('/',(req,res)=>{

    const params ={ }
    res.status(200).render('home.pug',params);

})
foodie.get('/contact',(req,res)=>{

    const params ={ }
    res.status(200).render('contact.pug',params);

})
foodie.get('/services',(req,res)=>{
    const params ={ }
    res.status(200).render('services.pug',params);
    
})

const DataSchema = new mongoose.Schema({  
    name:String,
    mob_no :Number,
    email : String,
    active : Boolean,
   
})


//const showdata=foodie.post('/contact',function(req,res){
//mongo.then(function(db){
  //  delete req.body._id;
    //db.collection('megshiv_data').insertOne(req.body);
//});

//res.send('Data recieced:\n' + JSON.stringify(req.body));
//});
//const createdocu = async()=>{
       //showdata(); 
      
    
//}
var empModel = mongoose.model('megshi', DataSchema);
var employee =empModel.find({});
 
foodie.post('/contact', function(req, res, next) {
  var empDetails = new empModel({
    name: req.body.uname,
    mob_num : req.body.phone,
    email: req.body.email,
    
  });
 
  empDetails.save(function(err,req1){
    if(err) throw err;
    employee.exec(function(err,data){
      if(err) throw err;
      res.render('index', { title: 'Employee Records', records:data, success:'Record Inserted Successfully' });
        });
  })
});

foodie.listen(port,()=>{
 console.log(`the application started on port ${port}`);
});
