import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tipo_criticidade')
export class TipoCriticidade {
  @PrimaryGeneratedColumn('identity', { name: 'codigo' })
  codigo: number;

  @Column()
  nome: string;

  @Column({ nullable: true })
  descricao: string;
}
