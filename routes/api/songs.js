var express = require('express');
const app = require('../../app')
var router = express.Router();
var Song = require('../../models/song')

router.get('/', function(req, res) {
    res.send('songs all');

    // Song.find({},(err,data)=>{
    //   if(err) return res.status(400).send('Error')
    //   res.send(data)
    // })
  });

router.get('/:id', function(req, res) {
    // res.send('songs get id');

    Song.findById(req.params.id,(err,song)=>{
        if(err) return res.status(400).send('Error')
        if(!song) return res.status(404).send('not found')
        res.send(song)
    })
  });

router.post('/', function(req, res) {
    // res.send('songs post');
    Song.create(req.body,(err,saveSong)=>{
      if(err) {return res.status(400).send()}
      res.status(201).send(saveSong)
    })

  });

router.put('/', function(req, res) {
    res.send('songs put');
  });

router.delete('/', function(req, res) {
    // res.send('songs delete');

    Song.findByIdAndDelete(req.params.id,(err,deleteSong)=>{
      if(err) return res.status(400).send('Error')
        if (!deleteSong) {
          return res.status(404).send()
        }
    })

  });

module.exports = router;