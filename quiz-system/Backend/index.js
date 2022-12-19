const express = require('express');
const cors = require('cors');
// require('dotenv').config();
// const { connection } = require('mongoose');
const userController = require('./controller/userController');
const connection = require('./config/db');
const questionController = require('./controller/questionController');
const magicController = require('./controller/magicController');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Welcome to home!');
})

app.use('/user',userController)

app.use('/question',questionController)

app.use('/magic', magicController)

app.listen(8000,async ()=>{
    try{
        await connection
        console.log('db is connected')
    }
    catch(err){
        console.log(err)
    }
    console.log('server is started')
})