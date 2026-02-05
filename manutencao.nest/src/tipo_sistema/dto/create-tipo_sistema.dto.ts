import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateTipoSistemaDto {
  @ApiProperty({
    example: 'Ex: AlertaSul, Qualle Hidro, etc',
    description: 'Nome do sistema a ser Cadastrado',
  })
  @IsString({ message: 'O nome deve ser um texto.' })
  @IsNotEmpty({ message: 'O nome do sistema é obrigatório.' })
  @MaxLength(25, {message: 'O nome do Sistema deve ter no Máximo 25 Caracteres'})
  nome: string;

  @ApiProperty({
    example: 'Sistema de monitoramento 24h',
    description: 'Breve descrição técnica',
    required: false, // Indica no Swagger que não é obrigatório
  })
  @IsOptional({message: 'Pode ser nulo ou indefinido'}) // Permite que o campo seja nulo ou indefinido
  @IsString({message: 'A descrição deve ser um texto'})
  descricao?: string;
}
