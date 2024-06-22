const { Schema, model, Types } = require("mongoose"); //types for relation

//TODO add/change properties depending on exam description

const stonesSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    formula: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    likes: {
        type: [Types.ObjectId],
        ref: "User",
        default: [],
    },
    author: {
        type: Types.ObjectId,
        ref: "User",
    },
});

const Stone = model("Stone", stonesSchema);

module.exports = { Stone };
