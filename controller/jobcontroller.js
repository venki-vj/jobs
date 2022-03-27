const jobs=require('../models/jobs');

module.exports.getJob = async (req,res) => {
    try {
        const List= await jobs.find();
        
        res.render('jobs/list',{List})
    } catch (error) {
        res.status(404).send(error.message)
    }
}



module.exports.getJobById=async(req,res)=>{
    try {
  
        const job=await jobs.findById(req.params.id);
        res.render('jobs/show',{job})
    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports.getPostJob=(req,res)=>{

  res.render('jobs/post')
}

module.exports.PostAJob=(req,res)=>{
  console.log(req.body.text);


  res.redirect('/api/jobs/post')
}