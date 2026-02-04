import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTipoSistemaDto } from './dto/create-tipo_sistema.dto';
import { UpdateTipoSistemaDto } from './dto/update-tipo_sistema.dto';
import { TipoSistema } from './entities/tipo_sistema.entity';
import { TipoSistemaService } from './tipo_sistema.service';

@ApiTags('Tipo Sistema') // <--- Agrupa na UI
@Controller('tipo-sistema')
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