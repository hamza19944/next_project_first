import mongoose from "mongoose";
const {Schema} = mongoose

const postSchema = new Schema({
    email:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: false
    },
    content:{
        type: String,
        required: true
    },
}, {timestamps: true})

export const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
// export default mongoose.model("Post", postSchema)