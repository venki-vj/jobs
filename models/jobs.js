const mongoose=require('mongoose');
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');
const JobSchema=new mongoose.Schema({
    job_description_html: { type: String, required: true, unique: true },
    job_title: { type: String, required: true, unique: true },
    company_name: { type: String, required: true, unique: true },
    location: { type: String, required: true, unique: true },
    pay: String,
    job_url: { type: String,  unique: true },
    url: { type: String, required: true, unique: true }
})


module.exports=mongoose.model('Joblist',JobSchema)