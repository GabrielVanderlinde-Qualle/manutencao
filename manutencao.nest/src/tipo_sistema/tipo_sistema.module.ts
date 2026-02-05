import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoSistemaController } from 'src/manutencao/entities/manutencao.entity';
import { TipoSistema } from './entities/tipo_sistema.entity';
import { TipoSistemaService } from './tipo_sistema.service';

@Module({
  imports: [TypeOrmModule.forFeature([TipoSistema])],
  controllers: [TipoSistemaController],
  providers: [TipoSistemaService],
})
export class TipoSistemaModule {}
