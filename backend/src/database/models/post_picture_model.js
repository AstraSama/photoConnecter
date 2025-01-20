import { Schema, model } from "mongoose";

const image_Schema = new Schema({
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
})
//TODO alterar post + add comentários
const post_Schema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User ',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    Image: {
        type: image_Schema,
        required: false
    }
});

const Post = model("Post", post_Schema);

export default Post;