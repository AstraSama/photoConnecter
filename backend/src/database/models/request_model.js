import { Schema, model } from "mongoose";

const user_request = new Schema({
    sender: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
    receiver: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    }
})

const request_Schema = new Schema({
    user_list_request: [ user_request ]
});

const Request = model("Request", request_Schema);

export default Request;