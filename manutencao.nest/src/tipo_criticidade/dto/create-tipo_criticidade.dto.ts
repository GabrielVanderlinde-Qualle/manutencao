import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTipoCriticidadeDto {
  @IsString({ message: 'O nome deve ser um texto.' })
  @IsNotEmpty({ message: 'O nome da criticidade não pode ser vazio.' })
  nome: string;

  @IsOptional()
  @IsString()
  descricao: string; // O '?' indica ao TypeScript que pode ser undefined
}