import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MONGO_URL, PRIVATEKEY } from './environments'
import { PlacesModule } from './places/place.module'
import { UsersModule } from './user/user.module'
import * as jwt from 'jsonwebtoken'
const fs = require('fs')

@Module({
  imports: [
    PlacesModule,
    UsersModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => {
        console.log(req.headers)
        const token = req.headers.authorization || ''
        let currentUser = null
        let decoded
        try {
          decoded = token ? jwt.verify(token, PRIVATEKEY) : null
          currentUser = decoded ? decoded : null
        } catch (error) {
          console.log(error);
        }
        console.log(decoded)
        return { currentUser }
      }
    }),
    MongooseModule.forRoot(MONGO_URL),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
