import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tipo_operacao')
export class TipoOperacao {
  @PrimaryGeneratedColumn('identity', { name: 'codigo' })
  codigo: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;
}
