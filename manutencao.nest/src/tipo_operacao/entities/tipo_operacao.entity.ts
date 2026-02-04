import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tipo_operacao')
export class TipoOperacao {
  @PrimaryGeneratedColumn('identity', { name: 'codigo' })
  codigo: number;

  @Column({ length: 100, nullable: false })
  nome: string;

  @Column({ type: 'text', nullable: true })
  descricao: string;
}
