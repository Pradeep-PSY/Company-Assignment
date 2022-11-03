const { Router } = require("express");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const questionModel = require("../model/questionModel");

const questionController = Router();

questionController.post('/create',authentication,authorization(["admin"]), async (req, res) => {
    const {difficulty, question, options, correct_answer} = req.body;

    const quest = await questionModel({difficulty , question, options, correct_answer});
    await quest.save();
    res.send('Question added Successfully')
 
})

questionController.post('/',authentication,authorization(["user"]), async (req, res) => {
    const {difficulty} = req.body; 

    const quest = await questionModel.find({difficulty}).limit(10)

    res.send({msg:"result",quest})
})
module.exports = questionController;