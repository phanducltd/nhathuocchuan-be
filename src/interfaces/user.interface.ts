import { Document } from 'mongoose';

export interface User extends Document {
  readonly userName: string;
  readonly password: string;
  readonly name: string;
  readonly email: string;
}
