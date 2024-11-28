import { Schema, model } from "mongoose";

const user_Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    connections: [{
        type: Schema.ObjectId,
        ref: 'User'
    }],
    requests: [{
        type: Schema.ObjectId,
        ref: 'User'
    }],
    posts: [{
        type: Schema.ObjectId,
        ref: 'Post',
        required: false
    }]
});

const User = model("User", user_Schema);

export default User;