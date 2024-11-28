import { Schema, model } from "mongoose";

const request_Schema = new Schema({
    user_list: [{
        type: Schema.ObjectId,
        ref: 'User',
        required: false
    }]
});

const Request = model("Request", request_Schema);

export default Request;