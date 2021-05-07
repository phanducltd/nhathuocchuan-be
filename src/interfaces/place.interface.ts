import { Document } from 'mongoose';
import { DistictBasicType } from 'src/dto/create-place.dto'



export interface PlaceBasic extends Document {
    readonly value: string;
    readonly label: string;
    readonly children: [DistictBasicType];
}