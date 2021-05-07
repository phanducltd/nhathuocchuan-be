import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../interfaces/user.interface';
import { Node } from '../interfaces/node.interface';
import { UserInput } from '../inputs/user.input';
import { ApolloError } from 'apollo-server-express'
import { validateEmail, validateUserName, validatePassword } from 'src/common/commonFunction';
import { PRIVATEKEY, SALTROUNDS } from 'src/environments';
import { LoginInput } from 'src/inputs/login.input';
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>,
    @InjectModel('Node') private readonly nodeModel: Model<Node>) { }

  async createUser(createUserDto: UserInput): Promise<String> {
    const newUserName = createUserDto.userName.toLocaleLowerCase()
    if (!validateEmail(newUserName) && !validateUserName(newUserName)) {
      throw new ApolloError('User is Invalid')
    }

    if (!validatePassword(createUserDto.password)) {
      throw new ApolloError('Password is Invalid')
    }

    if (!createUserDto.nodeName) {
      throw new ApolloError('Node name is require')
    }

    const existed = await this.userModel.findOne({ userName: newUserName })

    if (existed) throw new ApolloError('User is existed')
    const hash = bcrypt.hashSync(createUserDto.password, SALTROUNDS)
    createUserDto.password = hash
    const createdUser = new this.userModel(createUserDto);
    let newUser = await createdUser.save()
    let newNode = { ...createUserDto, idOwner: newUser._id }

    const createdNode = new this.nodeModel(newNode)
    let newNodeCreated = await createdNode.save()

    return jwt.sign({
      node: newNodeCreated._id,
      iat: Math.floor(Date.now() / 1000),
    }, PRIVATEKEY, { expiresIn: '30d' })
  }

  async login(infoLogin: LoginInput): Promise<string> {
    const userNameCheck = await this.userModel.findOne({ userName: infoLogin.userName })
    if (!userNameCheck) throw new ApolloError('Password or username is incorrect')

    let isCorectPass = bcrypt.compareSync(infoLogin.password, userNameCheck.password)
    if (!isCorectPass) throw new ApolloError('Password or username is incorrect')
    const nodeCheck = await this.nodeModel.findOne({ idOwner: userNameCheck._id })
    console.log(nodeCheck)
    var token = jwt.sign({
      node: nodeCheck._id,
      iat: Math.floor(Date.now() / 1000),
    }, PRIVATEKEY, { expiresIn: '30d' })
    return token
  }

}
