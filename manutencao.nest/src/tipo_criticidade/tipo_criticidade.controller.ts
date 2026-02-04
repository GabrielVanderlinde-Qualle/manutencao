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
import { TipoCriticidadeService } from './tipo_criticidade.service';
import { CreateTipoCriticidadeDto } from './dto/create-tipo_criticidade.dto';
import { UpdateTipoCriticidadeDto } from './dto/update-tipo_criticidade.dto';

@Controller('tipo-criticidade')
export class TipoCriticidadeController {
  constructor(
    private readonly tipoCriticidadeService: TipoCriticidadeService,
  ) {}

  @Post()
  create(@Body() createTipoCriticidadeDto: CreateTipoCriticidadeDto) {
    return this.tipoCriticidadeService.create(createTipoCriticidadeDto);
  }

  @Get()
  findAll() {
    return this.tipoCriticidadeService.findAll();
  }

  @Get(':id')
  // ParseIntPipe garante que o ID seja um número válido antes de chamar o Service
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tipoCriticidadeService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTipoCriticidadeDto: UpdateTipoCriticidadeDto,
  ) {
    return this.tipoCriticidadeService.update(id, updateTipoCriticidadeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tipoCriticidadeService.remove(id);
  }
}