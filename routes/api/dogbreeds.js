const { query } = require('express');
var express = require('express');
const app = require('../../app')
var router = express.Router();
var dogbreed = require('../../models/dogbreed')
let validation = require('../../models/validation_dog')
let usersValidation = require('../../models/users')

router.get('/', function(req, res) {
    // res.send('songs all');

    dogbreed.find({},(err,data)=>{
      if(err) return res.status(400).send('Error')
      res.send(data)
    })
  });

router.get('/:id', function(req, res) {
    // res.send('songs get id');

    dogbreed.findById(req.params.id,(err,dog)=>{
        if(err) return res.status(400).send('Error')
        if(!dog) return res.status(404).send('not found')
        res.send(dog)
    })
  });

router.post('/', function(req, res,next) {
  
      usersValidation.create(req.body,(err)=>{
        // console.log(req.body)
        // console.log(err)
        if (err === null) {
          return res.status(201).send({ success: req.body });
        }
        
         return res.status(400).send({ error: err.message });
      })
      
    
    
  });



  
    ;

router.put('/:id', function(req, res) {
    // res.send('songs put');
   usersValidation.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators: true}, (err, result) => {
      if (err !== null){
        res.status(400).send(err)
      }
      res.status(201).send(result)
    })
   
    
  });


router.delete('/:id', function(req, res) {
    // res.send('songs delete');

    usersValidation.findByIdAndDelete(req.params.id,(err,deleteDog)=>{
      if(err) return res.status(400).send('Error')
        if (!deleteDog) {
          return res.status(404).send()
        }
        res.status(204).send('data deleted')
    })

  });

module.exports = router;