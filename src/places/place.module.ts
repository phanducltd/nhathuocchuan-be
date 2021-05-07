import { Module } from '@nestjs/common';
import { PlacesResolver } from './place.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { PlaceSchema } from '../schema/place.schema';
import { PlacesService } from './place.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Aggregateplace', schema: PlaceSchema }])],
  providers: [PlacesResolver, PlacesService],
})
export class PlacesModule {}
