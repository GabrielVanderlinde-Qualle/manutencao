import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateTipoOperacaoDto {
  @ApiProperty({
    example: 'Operações individuais. Ex: Manutenção, Desligamento do sistema, etc',
    description: 'Descreva qual o Tipo de Operação a ser realizada',
  })
  @IsString({ message: 'O nome deve ser um texto.' })
  @IsNotEmpty({ message: 'O nome da operação é obrigatório.' })
  @MaxLength(25, {message: 'O tipo de Operação deve ter no Máximo 25 Caracteres'})
  nome: string;

  @ApiProperty({
    example: 'Operação de Teste de Sistema',
    description: 'Breve descrição técnica',
    required: false, // Indica no Swagger que não é obrigatório
  })
  @IsOptional()
  @IsString({message: 'A descrição deve ser um texto'})
  descricao?: string;
}
