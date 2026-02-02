import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tipo_criticidade')
export class TipoCriticidade {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column()
  nome: string;

  @Column({ nullable: true })
  descricao: string;
}
