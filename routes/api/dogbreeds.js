var express = require('express');
const app = require('../../app')
var router = express.Router();
var dogbreed = require('../../models/dogbreed')

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

router.post('/', function(req, res) {
    // res.send('songs post');
    dogbreed.create(req.body,(err,saveDog)=>{
      if(err) {return res.status(400).send()}
      res.status(201).send(saveDog)
    })

  });

router.put('/', function(req, res) {
    res.send('songs put');

    dogbreed.findOneAndUpdate(req.body,(err,updateDog)=>{
      if(err) {return res.status(400).send()}
      res.status(201).send(updateDog)
    })
  });

router.delete('/', function(req, res) {
    // res.send('songs delete');

    dogbreed.findByIdAndDelete(req.params.id,(err,deleteDog)=>{
      if(err) return res.status(400).send('Error')
        if (!deleteDog) {
          return res.status(404).send()
        }
    })

  });

module.exports = router;