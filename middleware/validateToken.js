var jwt = require('jsonwebtoken')

const valiadateToken = (req,res,next)=>{
    // console.log(req.headers['x-auth-token'])
    //check the presence of a token
    if(req.header('x-auth-token') !== undefined){
        token = req.header('x-auth-token') 
      

            jwt.verify(token, process.env.JWT_SECRET_KEY, function(err) {
                if(err){
                    res.status(401).send(err.message)
                }
                res.status(202).send('successful')
                next()
                
              });
    }else{
        res.status(401).send('Access is Denied (Token is needed)')
    }
    // console.log(jwt.verify(token, process.env.JWT_SECRET_KEY))
    //check the validity of the token

    //respond here with a valid http code
    //return res.status(401).send(`you reached the validateToken middleware  ${req.headers['x-auth-token']}`)
     // thou shalt proceed

}

module.exports = valiadateToken