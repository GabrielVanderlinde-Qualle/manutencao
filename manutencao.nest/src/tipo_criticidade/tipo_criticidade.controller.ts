import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTipoCriticidadeDto } from './dto/create-tipo_criticidade.dto';
import { UpdateTipoCriticidadeDto } from './dto/update-tipo_criticidade.dto';
import { TipoCriticidade } from './entities/tipo_criticidade.entity';
import { TipoCriticidadeService } from './tipo_criticidade.service';

@ApiTags('Tipo Criticidade') // <--- Agrupa na UI
@Controller('tipo-criticidade')
export class TipoCriticidadeController {
  constructor(private readonly tipoCriticidadeService: TipoCriticidadeService) {}

  @ApiOperation({ summary: 'Cria um novo tipo de criticidade' })
  @ApiResponse({ status: 201, description: 'Criado com sucesso.', type: TipoCriticidade })
  @Post()
  create(@Body() createTipoCriticidadeDto: CreateTipoCriticidadeDto) {
    return this.tipoCriticidadeService.create(createTipoCriticidadeDto);
  }

  @ApiOperation({ summary: 'Lista todas as criticidades' })
  @ApiResponse({ status: 200, type: [TipoCriticidade] })
  @Get()
  findAll() {
    return this.tipoCriticidadeService.findAll();
  }

  @ApiOperation({ summary: 'Busca uma criticidade pelo ID' })
  @ApiResponse({ status: 200, type: TipoCriticidade })
  @ApiResponse({ status: 404, description: 'Não encontrado' })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tipoCriticidadeService.findOne(id);
  }

  @ApiOperation({ summary: 'Atualiza uma criticidade' })
  @ApiResponse({ status: 200, description: 'Atualizado com sucesso.', type: TipoCriticidade })
  @ApiResponse({ status: 404, description: 'Não encontrado' })
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTipoCriticidadeDto: UpdateTipoCriticidadeDto,
  ) {
    return this.tipoCriticidadeService.update(id, updateTipoCriticidadeDto);
  }

  @ApiOperation({ summary: 'Remove uma criticidade' })
  @ApiResponse({ status: 200, description: 'Removido com sucesso.' })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tipoCriticidadeService.remove(id);
  }
}