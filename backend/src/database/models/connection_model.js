import { Schema, model } from "mongoose";

const connection_Schema = new Schema({
    user_list_connect: [{
        type: Schema.ObjectId,
        ref: 'User',
        required: false
    }]
});

const Connection = model("Connection", connection_Schema);

export default Connection;