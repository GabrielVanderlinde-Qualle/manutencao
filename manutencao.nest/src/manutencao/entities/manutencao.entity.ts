import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('manutencao') //Nome de Tabela
export class Manutencao {
  @PrimaryGeneratedColumn('identity', { name: 'codigo' })
  codigo: number;

  @Column({ name: 'codigo_tipo_sistema' })
  codigoTipoSistema: number;

  @Column({ name: 'codigo_tipo_operacao' })
  codigoTipoOperacao: number;

  @Column({ name: 'codigo_tipo_criticidade' })
  codigoTipoCriticidade: number;

  @CreateDateColumn({
    name: 'data_agendamento',
    type: 'timestamp',
    nullable: true,
  })
  dataAgendamento: Date;

  @CreateDateColumn({
    name: 'data_finalizada',
    type: 'timestamp',
    nullable: true,
  })
  dataFinalizada: Date;

  @Column({ type: 'text', nullable: true }) //Texto Longo "text" e Opcional "nullable: true"
  descricao: string;
}
