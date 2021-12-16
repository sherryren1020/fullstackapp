var express = require('express');
var router = express.Router();
let userModel = require('../../models/users')
var validateToken = require('../../middleware/validateToken')
let usersValidation = require('../../models/users')
var jwt = require('jsonwebtoken')

/* GET users listing. */
router.get('/', function(req, res) {
  
  res.send('res.body ');
});

router.get('/login', function(req, res) {
  res.send(res.body);
});

router.post('/login',function(req, res,next) {
  userModel.findOne({email: req.body.email}, (err, user) => {
      if (err!==null) {
          res.status(400).send(err.message)
      }
      if (user){
          user.comparePassword(req.body.password,(err, isMatch)=>{
              if (err) throw err;
              if (isMatch){
                res.header('Access-Control-Expose-Headers', 'x-auth-token')
                  res.append(
                      'x-auth-token',
                      jwt.sign(
                          {
                              data: JSON.stringify(user.email),
                              // exp: Math.floor(Date.now()/1000) + (60*60)
                          },
                          process.env.JWT_SECRET_KEY
                          )
                  )
                  
                  res.status(200).send('login success')
              }else{
                  res.status(400).send("Incorrect email or password")
              }   
          })
      }else{
          res.status(401).send("user not exist!")
      }
     
  })
  })

  router.post('/register', function(req, res,next) {
    
    usersValidation.create(req.body,(err, user)=>{
          // console.log(req.body)
          // console.log(err)
          if (err === null) {
            res.header('Access-Control-Expose-Headers', 'x-auth-token')
            res.append(
              'x-auth-token',
              jwt.sign(
                  {
                    email: user.email,
                    userID: user.id,
                    name: user.firstName + user.lastName
                  },
                  process.env.JWT_SECRET_KEY
                  )
          )
            return res.status(201).send(user);
          }
          
           return res.status(400).send({ error: err.message });
        })
        
      
      
    });

module.exports = router;
