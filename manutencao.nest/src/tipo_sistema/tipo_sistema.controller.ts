import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { TipoSistemaService } from './tipo_sistema.service';
import { CreateTipoSistemaDto } from './dto/create-tipo_sistema.dto';
import { UpdateTipoSistemaDto } from './dto/update-tipo_sistema.dto';

@Controller('tipo-sistema')
export class TipoSistemaController {
  constructor(private readonly tipoSistemaService: TipoSistemaService) {}

  @Post()
  create(@Body() createTipoSistemaDto: CreateTipoSistemaDto) {
    return this.tipoSistemaService.create(createTipoSistemaDto);
  }

  @Get()
  findAll() {
    return this.tipoSistemaService.findAll();
  }

  @Get(':id')
  // ParseIntPipe garante que o ID recebido na URL é um número
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tipoSistemaService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTipoSistemaDto: UpdateTipoSistemaDto,
  ) {
    return this.tipoSistemaService.update(id, updateTipoSistemaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tipoSistemaService.remove(id);
  }
}