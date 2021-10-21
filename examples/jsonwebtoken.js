const jwt=require('jsonwebtoken')
const payload = {
    name:"shuwei",
    hapi:"joi"
}

const secretkey = "mylittlesecret"
const token = jwt.sign(payload,secretkey)