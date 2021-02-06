import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SignIn = new Schema({
    email: String,
    password: String,
    role: String
});

export const signIn = mongoose.model('signIn', SignIn);