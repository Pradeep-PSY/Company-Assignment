const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { connection } = require('mongoose');
const userController = require('./controller/userController');


const app = express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Welcome to home!');
})

app.use('/user',userController)

app.listen(process.env.PORT,async ()=>{
    try{
        await connection
        console.log('db is connected')
    }
    catch(err){
        console.log(err)
    }
    console.log('server is started')
})