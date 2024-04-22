import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configDotenv } from 'dotenv';
import * as process from 'node:process';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

configDotenv();

function getSwaggerConfig(app: INestApplication<AppModule>) {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('AuthApi')
    .setDescription('The auth API description')
    .setVersion('1.0')
    .addTag('open-api')
    .addBearerAuth()
    .build();
  const document: OpenAPIObject = SwaggerModule.createDocument(
    app,
    swaggerConfig,
  );
  SwaggerModule.setup('open-api', app, document);
}
async function bootstrap() {
  const app: INestApplication<AppModule> = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  getSwaggerConfig(app);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
