import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTipoSistemaDto {
  @ApiProperty({
    example: 'Alerta Sul',
    description: 'Nome do sistema a ser cadastrado'
  })
  @IsString()
  nome: string;
  @ApiProperty({
    example: 'Sistema de Alertas',
    description: 'Breve descrição técnica',
  })
  @IsString()
  descricao: string;
}
