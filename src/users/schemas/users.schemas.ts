import { Schema } from 'mongoose';

export const UsersSchema = new Schema({
    name: String,
    email: String
});