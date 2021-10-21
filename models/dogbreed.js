var mongoose = require('mongoose')
const {Schema} = mongoose 

const breedsSchema = new Schema({ 
    breedName: String, 
    lifeExpectancy:Number,
    Temperament:[String],
    image:String

});

const Dogbreeds  = mongoose.model('Dogbreeds', breedsSchema);
module.exports = Dogbreeds


