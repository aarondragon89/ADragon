import 'module-alias/register';
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { join } from 'path';
import { swaggerBasicAuthMiddleware } from './common/middleware/swagger-basic-auth.middleware';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const publicPath = join(__dirname, '..', 'public');
  app.useStaticAssets(publicPath);

  const swaggerUser = (process.env.SWAGGER_USER || 'admin').trim();
  const swaggerPass = (process.env.SWAGGER_PASS || 'changeme').trim();
  app.use(swaggerBasicAuthMiddleware(swaggerUser, swaggerPass));

  const config = new DocumentBuilder()
    .setTitle('ADragon API Sample')
    .setDescription('ADragon API Sample description')
    .setVersion('1.0')
    .addTag('adragon')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, document, {
    customCssUrl: '/swagger/custom.css',
    customJs: ['/swagger/custom.js'],
    customSiteTitle: 'ADragon API Sample',
    customfavIcon: '/favicon.ico',
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  await app.listen(process.env.PORT ? Number(process.env.PORT) : 4001);
}

void bootstrap();
