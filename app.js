const express = require('express');
const jobsRoute= require('./routes/jobs');
var favicon = require('serve-favicon')
const path = require('path');
const mongoose = require('mongoose');
const ejsMate=require('ejs-mate');
const jobs= require('./models/jobs')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, '/views'))
app.engine('ejs',ejsMate);


app.use(req,res,next)

app.use('/api/jobs',jobsRoute)
var _favicon = favicon(path.join(__dirname, 'public', 'degree.ico'))

url='mongodb+srv://dbUser:dbUser@joblist.qq5pq.mongodb.net/JobApp?retryWrites=true&w=majority'
mongoose
    .connect(url)
    .then(()=>console.log('Database connected'))
    .catch((err)=>{console.log(err)})



app.get('/', async(req,res) => {
    
  
    const {search} = req.query
    
   if(search){

       const regex=new RegExp(escapeRegex(search), 'gi')

       jobs.find({
       $or :[
        {"company_name"  :regex},
        {"job_title"  :regex},
        {"location"  :regex},
        {"job_description_html"  :regex}   

       ]
    }
            ,(err,foundjobs)=>{
          if(err){
              console.log(err);
          }else{
            
              res.render('homepage',{foundjobs,search});
          }
      })
   }
   else{
       const result= await jobs.find()
    res.render('homepage',{search,result})

   }
})





port =process.env.PORT || 3000;
app.listen(port , (req,res) => {
    console.log(`Listening on port ${port}`)
})



function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};