import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger'; // <--- Importante
import { CreateTipoSistemaDto } from 'src/tipo_sistema/dto/create-tipo_sistema.dto';
import { UpdateTipoSistemaDto } from 'src/tipo_sistema/dto/update-tipo_sistema.dto';
import { TipoSistemaService } from 'src/tipo_sistema/tipo_sistema.service';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TipoCriticidade } from '../../tipo_criticidade/entities/tipo_criticidade.entity';
import { TipoOperacao } from '../../tipo_operacao/entities/tipo_operacao.entity';
import { TipoSistema } from '../../tipo_sistema/entities/tipo_sistema.entity';

@Entity('manutencao')
export class Manutencao {
  @ApiProperty({ example: 1, description: 'Código único da manutenção' })
  @PrimaryGeneratedColumn('identity', { name: 'codigo' })
  codigo: number;

  // --- RELACIONAMENTOS ---

  @ManyToOne(() => TipoSistema)
  @JoinColumn({ name: 'tipo_sistema' })
  tipoSistema: TipoSistema;

  @ManyToOne(() => TipoOperacao)
  @JoinColumn({ name: 'tipo_operacao' })
  tipoOperacao: TipoOperacao;

  @ManyToOne(() => TipoCriticidade)
  @JoinColumn({ name: 'tipo_criticidade' })
  tipoCriticidade: TipoCriticidade;

  // --- COLUNAS TABELAS MANUTENCAO ---

  @ApiProperty({ example: '2024-02-10T14:00:00Z', description: 'Data agendada' })
  @Column({ name: 'data_agendamento', type: 'timestamp', nullable: true })
  dataAgendamento: Date;

  @ApiProperty({ example: null, description: 'Data de finalização (se houver)' })
  @Column({ name: 'data_finalizada', type: 'timestamp', nullable: true })
  dataFinalizada: Date;

  @ApiProperty({ example: '2024-02-01T10:00:00Z', description: 'Data de criação' })
  @CreateDateColumn({ name: 'data_cadastro', type: 'timestamptz' })
  dataCadastro: Date;

  @ApiProperty({ example: 'Atualização', description: 'Descrição do serviço' })
  @Column({ type: 'text', nullable: true })
  descricao: string;
}

@ApiTags('Tipo Sistema') // <--- Agrupa na UI
@Controller({
  path: 'tipo-sistema',
  version: 1,
})
export class TipoSistemaController {
  constructor(private readonly tipoSistemaService: TipoSistemaService) {}

  @ApiOperation({ summary: 'Cria um novo tipo de sistema' })
  @ApiResponse({ status: 201, description: 'Criado com sucesso.', type: TipoSistema })
  @Post()
  create(@Body() createTipoSistemaDto: CreateTipoSistemaDto) {
    return this.tipoSistemaService.create(createTipoSistemaDto);
  }

  @ApiOperation({ summary: 'Lista todos os tipos de sistema' })
  @ApiResponse({ status: 200, type: [TipoSistema] })
  @Get()
  findAll() {
    return this.tipoSistemaService.findAll();
  }

  @ApiOperation({ summary: 'Busca um sistema pelo ID' })
  @ApiResponse({ status: 200, type: TipoSistema })
  @ApiResponse({ status: 404, description: 'Não encontrado' })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tipoSistemaService.findOne(id);
  }

  @ApiOperation({ summary: 'Atualiza um tipo de sistema' })
  @ApiResponse({ status: 200, description: 'Atualizado com sucesso.', type: TipoSistema })
  @ApiResponse({ status: 404, description: 'Não encontrado' })
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTipoSistemaDto: UpdateTipoSistemaDto,
  ) {
    return this.tipoSistemaService.update(id, updateTipoSistemaDto);
  }

  @ApiOperation({ summary: 'Remove um tipo de sistema' })
  @ApiResponse({ status: 200, description: 'Removido com sucesso.' })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tipoSistemaService.remove(id);
  }
}
