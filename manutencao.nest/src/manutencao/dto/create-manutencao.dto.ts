import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString } from 'class-validator';

export class CreateManutencaoDto {
  // --- DESCRIÇÃO --
  @ApiProperty({
    description: 'Descrição detalhada da manutenção',
    example: 'Implementar Funcionalidade',
  })
  @IsString()
  @IsNotEmpty({ message: 'A descrição da manutenção é obrigatória.' })
  descricao: string;

  // --- TIPO SISTEMA --
  @ApiProperty({
    description: 'ID do Sistema (Ex: 1 para Alerta Sul, 2 para Defesa Civil)',
    example: 1,
  })
  @IsInt({ message: 'O tipo de sistema deve ser um numero inteiro' })
  @IsPositive({ message: 'O ID deve ser um número positivo' })
  tipoSistema: number;

  // --- TIPO OPERAÇÃO --
  @ApiProperty({
    description: 'ID do Tipo de Operação (Ex: 1 Preventiva, 2 Agendada)',
    example: 2,
  })
  @IsInt({ message: 'O tipo de operação deve ser um numero inteiro' })
  @IsPositive({ message: 'O ID deve ser um número positivo' })
  tipoOperacao: number;

  // --- TIPO CRITICIDADE --
  @ApiProperty({
    description: 'ID da Criticidade (Ex: 1 Baixa, 3 Alta)',
    example: 3,
  })
  @IsInt({ message: 'O tipo de criticidade deve ser um numero inteiro' })
  @IsPositive({ message: 'O ID deve ser um número positivo' })
  tipoCriticidade: number;

  // --- DATA AGENDAMENTO --
  @ApiPropertyOptional({
    description: 'Data prevista para execução (ISO 8601)',
    example: '2024-02-10T14:00:00Z',
  })
  @IsOptional()
  @IsDateString()
  dataAgendamento?: string;

  // --- DATA FINALIZADA --
  @ApiPropertyOptional({
    description: 'Data em que o serviço foi concluído',
    example: '2024-02-10T16:30:00Z',
  })
  @IsOptional()
  @IsDateString()
  dataFinalizada?: string;
}
