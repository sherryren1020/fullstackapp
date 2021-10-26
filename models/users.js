var mongoose = require('mongoose')
bcrypt = require('bcrypt'),
SALT_WORK_FACTOR = 10;

const usersValidation = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true,
      },
    firstName: {
        type:String,
        required: true,
        max: 100
    },
    lastName: {
        type:String,
        required: true,
        max: 100
    },
    email: {
        type:String,
        required: true,
        unique: true,
        max: 100,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        }
       
    },
    password: {
        type:String,
        max: 255,
        required: true
    },
},
    {
        collection: 'users'
    }
);

usersValidation.pre('save', function(next){
    let user = this;

    if (!user.isModified('password')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
})

usersValidation.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const users_Validation = mongoose.model('usersValidation', usersValidation);
// const users_Schema  = mongoose.model('usersSchema', usersSchema);
module.exports = users_Validation