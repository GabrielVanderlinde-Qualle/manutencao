import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importação
import { ManutencaoService } from './manutencao.service';
import { ManutencaoController } from './manutencao.controller';
import { Manutencao } from './entities/manutencao.entity'; // Importação

@Module({
  imports: [TypeOrmModule.forFeature([Manutencao])], // Importação
  controllers: [ManutencaoController],
  providers: [ManutencaoService],
})
export class ManutencaoModule {}
