const valiadateToken = (req,res,next)=>{

    //check the presence of a token

    //check the validity of the token

    //respond here with a valid http code
    return res.status(401).send(`you reached the validateToken middleware  ${req.headers['x-auth-token']}`)
    next() // thou shalt proceed

}

module.exports = valiadateToken