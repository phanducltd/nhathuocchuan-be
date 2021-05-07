import { Document } from 'mongoose';

export interface Node extends Document {
    readonly idOwner: string;
    readonly email: string;
    readonly nodeName: string;
    readonly mobile: string;
    readonly codePlace: string;
    readonly addressDetail: string;
}
