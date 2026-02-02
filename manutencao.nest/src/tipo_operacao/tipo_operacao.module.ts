import { Module } from '@nestjs/common';
import { TipoOperacaoService } from './tipo_operacao.service';
import { TipoOperacaoController } from './tipo_operacao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoOperacao } from './entities/tipo_operacao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoOperacao])],
  controllers: [TipoOperacaoController],
  providers: [TipoOperacaoService],
})
export class TipoOperacaoModule {}
