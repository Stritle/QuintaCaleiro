import mongoose from 'mongoose'


const vinhoSchema = new mongoose.Schema({

    name: {
        type: String, required: true
    },
    image: {
        type: String, required: true
    },
    countInStock: {
        type: Number, default: 0, required: true
    },
    description: {
        type: String, required: true
    },
    price: {
        type: Number, default: 0, required: true
    },
    rating: {
        type: Number, default: 0, required: true
    },
    numReviews: {
        type: Number, default: 0, required: true
    }
});

const vinhoModel = mongoose.model("Vinho", vinhoSchema);

export default vinhoModel;