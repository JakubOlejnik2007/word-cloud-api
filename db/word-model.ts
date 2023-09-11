import mongoose from "mongoose";

const Word = mongoose.model('Word', new mongoose.Schema({
    content: {
        type: String,
        required: true
    }
}))
export default Word;  