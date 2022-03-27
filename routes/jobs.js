const router = require('express').Router();
const Jobcontrol =require('../controller/jobcontroller');
const jobs= require('../models/jobs')

router.get('/',Jobcontrol.getJob)

// router.get('/post',Jobcontrol.getPostJob)
// router.post('/post',Jobcontrol.PostAJob)
router.get('/:id',Jobcontrol.getJobById)



module.exports= router;