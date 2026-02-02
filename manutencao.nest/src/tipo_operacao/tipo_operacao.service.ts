import { Injectable } from '@nestjs/common';
import { CreateTipoOperacaoDto } from './dto/create-tipo_operacao.dto';
import { UpdateTipoOperacaoDto } from './dto/update-tipo_operacao.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoOperacao } from './entities/tipo_operacao.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TipoOperacaoService {
  constructor(
    @InjectRepository(TipoOperacao)
    private tipoOperacaoRepository: Repository<TipoOperacao>,
  ) {}

  create(createTipoOperacaoDto: CreateTipoOperacaoDto) {
    return this.tipoOperacaoRepository.save(createTipoOperacaoDto);
  }

  findAll() {
    return this.tipoOperacaoRepository.find();
  }

  findOne(id: number) {
    return this.tipoOperacaoRepository.findOneBy({ codigo: id });
  }

  //Atualização no Banco de Dados
  async update(id: number, updateTipoOperacaoDto: UpdateTipoOperacaoDto) {
    //Solicita atualização no Banco de Dados
    await this.tipoOperacaoRepository.update(id, updateTipoOperacaoDto);

    // Busca o item atualizado para mostrar o usuário
    return this.tipoOperacaoRepository.findOneBy({ codigo: id });
  }

  remove(id: number) {
    return `This action removes a #${id} tipoOperacao`;
  }
}
