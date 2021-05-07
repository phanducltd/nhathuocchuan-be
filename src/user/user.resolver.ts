import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './user.service';
import { UserInput } from '../inputs/user.input';
import { UserType } from 'src/dto/create-user.dto';
import { LoginInput } from 'src/inputs/login.input';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) { }

  @Mutation(() => String)
  async createUser(@Args('input') input: UserInput) {
    return this.usersService.createUser(input);
  }

  @Query(() => String)
  async login(@Args('input') input: LoginInput) {
    return this.usersService.login(input);
  }
}
