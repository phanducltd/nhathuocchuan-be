import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PlaceBasic } from 'src/interfaces/place.interface';
import { PlaceType } from 'src/dto/create-place.dto';
@Injectable()
export class PlacesService {
  constructor(@InjectModel('Aggregateplace') private readonly placeModel: Model<PlaceBasic>) { }

  async getPlacesBasic(): Promise<PlaceType[]> {
    let placeValue = await this.placeModel.find({}).exec()
    return placeValue
  }
}
