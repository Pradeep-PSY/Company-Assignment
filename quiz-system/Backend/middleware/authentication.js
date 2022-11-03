const jwt = require('jsonwebtoken');

const authentication = (req,res,next) =>{
    if(!req.headers.authorization) return res.send('Retry again')
    const token = req.headers.authorization.split(' ')[1]
    
    jwt.verify(token,'userbase', (err,decoded)=>{
        if(err){
            return res.send('login failed')
        }

        
        if(decoded){
          
            req.body.role = decoded.role;
            next()
        }
    })
}

module.exports = authentication;