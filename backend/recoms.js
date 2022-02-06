import mongoose from "mongoose";

const recomsSchema = new mongoose.Schema({
    movie1: {
        type: String,
        required: true
    },
    movie2: {
        type: String,
        required: true
    },
    movie3: {
        type: String,
        required: true
    },
    movie4: {
        type: String,
        required: true
    },
    movie5: {
        type: String,
        required: true
    }
});

const Recoms = mongoose.model('Recoms', recomsSchema);
export { Recoms };