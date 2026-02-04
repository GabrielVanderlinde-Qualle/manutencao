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
import { TipoOperacaoService } from './tipo_operacao.service';
import { CreateTipoOperacaoDto } from './dto/create-tipo_operacao.dto';
import { UpdateTipoOperacaoDto } from './dto/update-tipo_operacao.dto';

@Controller('tipo-operacao')
export class TipoOperacaoController {
  constructor(private readonly tipoOperacaoService: TipoOperacaoService) {}

  @Post()
  create(@Body() createTipoOperacaoDto: CreateTipoOperacaoDto) {
    return this.tipoOperacaoService.create(createTipoOperacaoDto);
  }

  @Get()
  findAll() {
    return this.tipoOperacaoService.findAll();
  }

  @Get(':id')
  // ParseIntPipe protege a rota contra valores não numéricos (ex: /tipo-operacao/abc)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tipoOperacaoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTipoOperacaoDto: UpdateTipoOperacaoDto,
  ) {
    return this.tipoOperacaoService.update(id, updateTipoOperacaoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tipoOperacaoService.remove(id);
  }
}