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
    }
});

const Users = mongoose.model('Users', usersSchema);
export { Users };