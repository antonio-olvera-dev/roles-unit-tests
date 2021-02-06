import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Users = new Schema({
    email: String,
    role: String,
    text: String
});

export const users = mongoose.model('Users', Users);