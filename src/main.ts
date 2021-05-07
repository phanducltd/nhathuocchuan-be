import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { PORT_BE } from './environments'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT_BE);
}
bootstrap();
