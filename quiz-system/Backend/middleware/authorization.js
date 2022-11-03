
const authorization = (role) => {
    return (req, res, next) => {
        // console.log(role,req.body)
        if (!role.includes(req.body.role)) {
           return res.send("error not authorized");
        }
        else{

            next();
        }
    }
}

module.exports = authorization;