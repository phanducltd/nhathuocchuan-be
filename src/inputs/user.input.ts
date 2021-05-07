import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class UserInput {
  @Field()
  userName: string;
  @Field()
  password: string;
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  nodeName: string;
  @Field()
  mobile: string;
  @Field()
  codePlace: string;
  @Field()
  addressDetail: string;
}
