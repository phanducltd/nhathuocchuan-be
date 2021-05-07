import * as dotenv from 'dotenv'
dotenv.config()

// environment
const MONGO_URL: string = process.env.MONGO_URL || 'mongodb://localhost/test14359'
const PORT_BE: number = +process.env.PORT_BE || 14350
const SALTROUNDS = +process.env.SALTROUNDS || 10
const PRIVATEKEY = process.env.PRIVATEKEY || 'ksfhwejrwujssdfhsj223sdfjhsd'

export {
    MONGO_URL,
    PORT_BE,
    SALTROUNDS,
    PRIVATEKEY,
}