process.env.TZ = 'America/Sao_Paulo';

import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Versionamento
  app.setGlobalPrefix('api');

  app.enableVersioning({
    type: VersioningType.URI, // Cria rotas tipo v1/exemplo
    defaultVersion: '1',
  });

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Manutenção API')
    .setDescription('Sistema de gestão de manutenções, operações e criticidades.')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);

  // Validação
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Transforma o JSON recebido nos tipos do DTO automaticamente
      whitelist: true, // Remove campos que não estão no DTO (segurança)
      forbidNonWhitelisted: true, // Dá erro se mandarem campo "pirata"
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
