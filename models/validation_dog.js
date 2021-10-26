var mongoose = require('mongoose')


const validationSchema = new mongoose.Schema({ 
  breedsName:{
    type: String,
    required: true
},
lifeExpectancy:{
  type:Number,
  min: 6,
  max: 20,
  required: true
},
Temperament:[String],
image:String

},
{
    collection: 'breeds'
});

const dogValidation  = mongoose.model('validation', validationSchema);
module.exports = dogValidation