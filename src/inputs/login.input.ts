import { InputType, Field } from 'type-graphql';

@InputType()
export class LoginInput {
  @Field()
  userName: string;
  @Field()
  password: string;
}
