import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configDotenv } from 'dotenv';
import * as process from 'node:process';
import { INestApplication, ValidationPipe } from '@nestjs/common';

configDotenv();

async function bootstrap() {
  const app: INestApplication<AppModule> = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
