const bcrypt = require('bcrypt')

bcrypt.genSalt((err,salt) =>{
    console.log(salt)

    
})

bcrypt.hash('password',10,(err,hash)=>{
    console.log(hash)
}) // the string you want to hash..


