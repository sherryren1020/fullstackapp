var express = require('express');
// const app = require('../../app')
var router = express.Router();
// var validateToken = require('../../middleware/validateToken')


var songsRouter = require('./songs')
router.use('/songs',songsRouter)

var usersRouter = require('./users')
router.use('/users',usersRouter)

var registerRouter = require('./register')
router.use('/users/register',registerRouter)

var loginRouter = require('./login')
router.use('/users/login',loginRouter)

var dogbreedsRouter = require('./dogbreeds')
router.use('/dogbreeds',dogbreedsRouter)

router.get('/', function(req, res) {
  res.header('x-mycustom-header',"hello from my header")
  res.send('api');
});

module.exports = router;