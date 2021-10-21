var express = require('express');
// const app = require('../../app')
var router = express.Router();


var songsRouter = require('./songs')
router.use('/songs',songsRouter)

var usersRouter = require('./users')
router.use('/users',usersRouter)

var dogbreedsRouter = require('./dogbreeds')
router.use('/dogbreeds',dogbreedsRouter)

router.get('/', function(req, res) {
  res.send('api ');
});

module.exports = router;