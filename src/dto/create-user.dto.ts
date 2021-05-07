import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class UserType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly userName: string;
  @Field()
  readonly password: string;
  @Field()
  readonly email: string;
  @Field()
  readonly name: string;
  @Field()
  readonly avatar: string;
}
