import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgre123',
      database: 'manutencao_db',
      entities: [],
      synchronize: false, //Tabelas já Criadas no Banco Local
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
