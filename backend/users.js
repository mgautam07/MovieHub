import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    favorites: {
        type: [Number],
        required: false
    }
});

const Users = mongoose.model('Users', usersSchema);
export { Users };