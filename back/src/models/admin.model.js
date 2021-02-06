import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Admin = new Schema({
    email: String,
    role: String,
    text: String
});

export const admin = mongoose.model('admin', Admin);