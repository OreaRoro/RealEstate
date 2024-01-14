import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: 'https://th.bing.com/th/id/R.98fd5107cc6e41a1c0bd49289d863a1f?rik=LMKgHNqXDH8G2A&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG.png&ehk=%2bRw6Gx3u57%2fACYW3MfLygtsoE%2fOOVGjvsM8PMQNAQvE%3d&risl=&pid=ImgRaw&r=0'
    }
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

export default User;