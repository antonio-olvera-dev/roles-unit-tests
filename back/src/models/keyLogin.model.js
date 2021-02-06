import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Login = new Schema({
    email: String,
    password: String
});

export const login = mongoose.model('login', Login);