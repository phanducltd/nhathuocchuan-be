import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class NodeType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly nodeName: string;
  @Field()
  readonly mobile: string;
  @Field()
  readonly codePlace: string;
  @Field()
  readonly addressDetail: string;
}
