import { Module } from '@nestjs/common';
import { TipoCriticidadeService } from './tipo_criticidade.service';
import { TipoCriticidadeController } from './tipo_criticidade.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoCriticidade } from './entities/tipo_criticidade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoCriticidade])],
  controllers: [TipoCriticidadeController],
  providers: [TipoCriticidadeService],
})
export class TipoCriticidadeModule {}
