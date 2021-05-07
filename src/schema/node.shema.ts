import * as mongoose from 'mongoose';

export const NodeSchema = new mongoose.Schema({
    idOwner: String,
    mobile: String,
    nodeName: String,
    logo: String,
    codePlace: String,
    addressDetail: String,
});
