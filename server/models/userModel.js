import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        Minlength: 2,
        Maxlength: 30,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})

const UserSchema = mongoose.model('UserSchema', userSchema);

export default UserSchema;