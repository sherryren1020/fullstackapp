var mongoose = require('mongoose')
const {Schema} = mongoose 

const breedsSchema = new Schema({ 
    breedName: String, 
    lifeExpectancy:Number,
    Temperament:[String],
    image:String

},
{
    collection: 'breeds'
});

const Dogbreeds  = mongoose.model('Dogbreeds', breedsSchema);
module.exports = Dogbreeds


