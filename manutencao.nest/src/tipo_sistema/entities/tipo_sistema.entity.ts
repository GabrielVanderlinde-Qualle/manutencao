import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tipo_sistema')
export class TipoSistema {
  @PrimaryGeneratedColumn('identity', { name: 'codigo' })
  codigo: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;
}