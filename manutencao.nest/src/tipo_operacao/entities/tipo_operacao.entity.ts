import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tipo_operacao')
export class TipoOperacao {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column()
  nome: string;

  @Column({ nullable: true })
  descricao: string;
}
