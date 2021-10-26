const { query } = require('express');
var express = require('express');
const app = require('../../app')
var router = express.Router();
var dogbreed = require('../../models/dogbreed')
let validation = require('../../models/validation_dog')

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
  
      validation.create(req.body,(err)=>{
        // console.log(req.body)
        // console.log(err)
        if (err === null) {
          return res.status(201).send({ success: req.body });
        }
        
         return res.status(400).send({ error: err.message });
      })
      
    
    
  });



    // dogbreed.create(req.body,(err,saveDog)=>{
    //   dogbreed.validate((error)=>{
    //     console.log(error)
    //   })
    //   if(err) {return res.status(400).send()}
    //   res.status(201).send(saveDog)
    // })
    ;

router.put('/:id', function(req, res) {
    // res.send('songs put');
    validation.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators: true}, (err, result) => {
      if (err !== null){
        res.status(400).send(err)
      }
      res.status(201).send(result)
    })
    // ,(err,updateDog)=>{
    //   // console.log(req.body)
    //   // console.log(err)
    //   console.log(updateDog)
    //   if(!updateDog) {return res.status(404).send('No found')}
    //   console.log(err)
    //   if(err === null){
    //     return res.status(201).send({ success: req.body });
    //   }
    //   return res.status(400).send({ error: err.message });
       
    // }
    
  });


router.delete('/:id', function(req, res) {
    // res.send('songs delete');

    dogbreed.findByIdAndDelete(req.params.id,(err,deleteDog)=>{
      if(err) return res.status(400).send('Error')
        if (!deleteDog) {
          return res.status(404).send()
        }
        res.status(204).send('data deleted')
    })

  });

module.exports = router;