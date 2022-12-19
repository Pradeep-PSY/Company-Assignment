const { Router } = require("express");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const magicModel = require("../model/magicModel");
const questionModel = require("../model/questionModel");

const magicController = Router();


magicController.post('/',authentication,authorization(['user']), async (req, res) => {
    const {email} = req.body; 
    // console.log(email)

    let result = await magicModel.findOne({})
     
    // console.log(result.email_list);

    

    if(result.email_list.includes(email)){
        return res.send(true)
    }else{
         result.email_list.push(email)
    //    console.log(result.email_list , 'updated')
        await magicModel.updateOne({email_list:result.email_list})
        
        return res.send(false)
    }

    // res.send('wip')


})

magicController.get('/question',authentication,authorization(['user']), async (req, res)=>{
    const result = await magicModel.findOne({})
     res.send(result.magic);
})

magicController.post('/create',authentication,authorization(['user']), async (req, res) => {
    const {magic, email_list} = req.body;

    const mat = new magicModel({magic, email_list});
    await mat.save();
    res.send(mat)
})
module.exports = magicController;