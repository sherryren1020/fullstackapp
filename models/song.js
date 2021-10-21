var mongoose = require('mongoose')
const {Schema} = mongoose 

const songSchema = new Schema({ 
    title: String, 
    artist:String,
    releaseYear:Number,
    genres:[String],
    rating:[Number]

});

module.exports  = mongoose.model('Song', songSchema);


