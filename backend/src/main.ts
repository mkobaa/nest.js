import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../.env` }); // Ensure the env path is correctly pointed to the root

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();