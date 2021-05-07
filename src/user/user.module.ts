import { Module } from '@nestjs/common';
import { UsersResolver } from './user.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../schema/user.schema';
import { UsersService } from './user.service';
import { NodeSchema } from 'src/schema/node.shema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema },{ name: 'Node', schema: NodeSchema }])],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
