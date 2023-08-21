import mongoose from "mongoose";
const {Schema} = mongoose

const userSchema = new Schema({
    username:{
        type: String,
        unqiue: true,
        required: true
    },
    email:{
        type: String,
        unqiue: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
}, {timestamps: true})

export const User = mongoose.models.User || mongoose.model('User', userSchema);
// export default mongoose.model("User", userSchema)