import { Schema, model } from "mongoose";

const comment = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: "User",
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

const comments_Schema = new Schema({
    comments: [comment]
});

const Comments = model("Comments", comments_Schema);

export default Comments;