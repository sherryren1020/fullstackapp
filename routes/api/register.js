// var express = require('express');
// var router = express.Router();
// let usersValidation = require('../../models/users')




// router.get('/register', function(req, res) {
//   // usersValidation.find({},(err,data)=>{
//     if(err) return res.status(400).send('Error')
//     res.send(data)
//   // })

//   });

// router.get('/register:id', function(req, res) {
//     // res.send('songs get id');

//     usersValidation.findById(req.params.id,(err,user)=>{
//         if(err) return res.status(400).send('Error')
//         if(!user) return res.status(404).send('not found')
//         res.status(200).send(user)
//     })
//   });

// router.post('/register', function(req, res,next) {
  
//   usersValidation.create(req.body,(err, created)=>{
//         // console.log(req.body)
//         // console.log(err)
//         if (err === null) {
          
//           return res.status(201).send(created);
//         }
        
//          return res.status(400).send({ error: err.message });
//       })
      
    
    
//   });

//     ;

// router.put('/register:id', function(req, res) {
//     // res.send('songs put');
//     usersValidation.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators: true}, (err, result) => {
//       if (err !== null){
//         res.status(400).send(err)
//       }
//       res.status(201).send(result)
//     })
   
    
//   });


// router.delete('/register:id', function(req, res) {
//     // res.send('songs delete');

//     usersValidation.findByIdAndDelete(req.params.id,(err,deleteUser)=>{
//       if(err) return res.status(400).send('Error')
//         if (!deleteUser) {
//           return res.status(404).send()
//         }
//         res.status(204).send('data deleted')
//     })

//   });

// module.exports = router;
