const jwt = require('jsonwebtoken')

require('dotenv').config()

function verifyToken(req, res, next){
    //token verification login

    //get bearer token from header of req object
    const bearerToken = req.headers.authorization;

    //check if bearer method is empty
    if(bearerToken){
        //get token from bearer token
        const token = bearerToken.split(' ')[1]

        try{
            //verify the token time
            let decodedToken = jwt.verify(token, process.env.SECRET_KEY)

            next()
        }catch(error){
            return res.send({message: "JWT expired", payload: {}})
        }
    }
    else{
        res.send({ message: "Unauthorized userssss"})
    }
}

module.exports = verifyToken