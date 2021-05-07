import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class WardBasicType {
  @Field()
  value: string;
  @Field()
  label: string;
}

@ObjectType()
export class DistictBasicType {
  @Field()
  value: string;
  @Field()
  label: string;
  @Field()
  codeParent: string;
  @Field(() => [WardBasicType])
  children: [WardBasicType];
}


@ObjectType()
export class PlaceType {
  @Field()
  value: string;
  @Field()
  label: string;
  @Field(() => [DistictBasicType])
  children: [DistictBasicType];
}
