const express =require('express');
const User = require('../models/user')
const router = express.Router();
router.get('/:id',async (req,res)=>{
    const onid = await User.find({_id:req.params.id})
    return res.json(onid)
})
router.get('/',async (req,res)=>{
    const alldbusers = await User.find({})
    return res.json(alldbusers)
})
router.post('/',async (req,res)=>{
    const bodyn = req.body;
    if (!bodyn ||
        !bodyn.firstname||
        !bodyn.lastname||
        !bodyn.email||
        !bodyn.jobdetail||
        !bodyn.gender) 
        {
        console.log(bodyn)
        return res.json({status:"error"})
    }
    const cret = await User.create({
        firstname : bodyn.firstname,
        lastname:bodyn.lastname,
        email:bodyn.email,
        gender:bodyn.gender,
        jobdetail:bodyn.jobdetail,
    })
    console.log(JSON.stringify(cret))
    return res.end("sucess")

})
module.exports =router;