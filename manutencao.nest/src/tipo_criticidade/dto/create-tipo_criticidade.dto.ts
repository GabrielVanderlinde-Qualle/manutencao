import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateTipoCriticidadeDto {
  @ApiProperty({
    example: 'Cadastro de tipo de serviços. Ex: Agendada, Imediata, etc',
    description: 'Descreva a Criticidade da Manutenção',
  })
  @IsString({ message: 'O nome deve ser um texto.' })
  @IsNotEmpty({ message: 'O nome da criticidade não pode ser vazio.' })
  @MaxLength(25, { message: 'O tipo de Criticidade deve ter no Máximo 25 Caracteres' })
  nome: string;

  @ApiProperty({
    example: 'Imediata devido a Manutenção Urgente',
    description: 'Breve descrição técnica',
    required: false, // Indica no Swagger que não é obrigatório
  })
  @IsOptional()
  @IsString({ message: 'A descrição deve ser um texto' })
  descricao?: string;
}
