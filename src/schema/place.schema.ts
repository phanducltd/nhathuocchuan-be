import * as mongoose from 'mongoose';

export const PlaceSchema = new mongoose.Schema({
    value: String,
    label: String,
    children: Array
})
