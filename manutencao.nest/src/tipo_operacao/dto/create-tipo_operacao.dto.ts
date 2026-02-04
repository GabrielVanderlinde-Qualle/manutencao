import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTipoOperacaoDto {
  @IsString({ message: 'O nome deve ser um texto.' })
  @IsNotEmpty({ message: 'O nome da operação é obrigatório.' })
  nome: string;

  @IsOptional()
  @IsString()
  descricao: string;
}