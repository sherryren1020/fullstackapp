var express = require('express');
var jwt = require('jsonwebtoken')
var router = express.Router();
let userModel = require('../../models/users')
var validateToken = require('../../middleware/validateToken')
//router.use(validateToken)
router.get('/', function(req, res) {
   

    userModel.find({},(err,data)=>{
      if(err) return res.status(400).send('Error')
      res.send(data)
    })
  });
router.get('/:id', validateToken,function(req, res) {
    res.send('songs all');

    // Song.find({},(err,data)=>{
    //   if(err) return res.status(400).send('Error')
    //   res.send(data)
    // })
  });

router.post('/', function(req, res,next) {
    userModel.findOne({email: req.body.email}, (err, user) => {
        if (err!==null) {
            res.status(400).send(err.message)
        }
        user.comparePassword(req.body.password,(err, isMatch)=>{
            if (err) throw err;
            if (isMatch){
                res.append(
                    'x-auth-token',
                    jwt.sign(
                        {
                            data: JSON.stringify(user),
                            exp: Math.floor(Date.now()/1000) + (60*60)
                        },
                        process.env.JWT_SECRET_KEY
                        )
                ).status(200).send()
            }else{
                res.status(400).send("Incorrect email or password")
            }   
        })
    })
    })



module.exports = router;