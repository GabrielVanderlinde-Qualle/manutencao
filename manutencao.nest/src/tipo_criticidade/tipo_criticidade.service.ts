import { Injectable } from '@nestjs/common';
import { CreateTipoCriticidadeDto } from './dto/create-tipo_criticidade.dto';
import { UpdateTipoCriticidadeDto } from './dto/update-tipo_criticidade.dto';
import { Repository } from 'typeorm';
import { TipoCriticidade } from './entities/tipo_criticidade.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TipoCriticidadeService {
  constructor(
    @InjectRepository(TipoCriticidade)
    private tipoCriticidadeRepository: Repository<TipoCriticidade>,
  ) {}

  create(createTipoCriticidadeDto: CreateTipoCriticidadeDto) {
    return this.tipoCriticidadeRepository.save(createTipoCriticidadeDto);
  }

  findAll() {
    return this.tipoCriticidadeRepository.find();
  }

  findOne(id: number) {
    return this.tipoCriticidadeRepository.findOneBy({ codigo: id });
  }

  // Atualiza no Banco de Dados
  async update(id: number, updateTipoCriticidadeDto: UpdateTipoCriticidadeDto) {
    // Solicita a Atualização no Banco de Dados
    await this.tipoCriticidadeRepository.update(id, updateTipoCriticidadeDto);

    // Busca o item atualizado para mostrar pro usuário
    return this.tipoCriticidadeRepository.findOneBy({ codigo: id });
  }

  remove(id: number) {
    return `This action removes a #${id} tipoCriticidade`;
  }
}
