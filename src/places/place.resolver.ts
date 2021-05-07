import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { PlaceType } from 'src/dto/create-place.dto';
import { PlacesService } from './place.service';

@Resolver()
export class PlacesResolver {
  constructor(private readonly usersService: PlacesService) { }

  @Query(() => [PlaceType])
  async getPlacesBasic() {
    return this.usersService.getPlacesBasic();
  }
}
