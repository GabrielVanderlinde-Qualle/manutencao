-- Agendar Manutenção
update manutencao
set data_agendamento = '2026-02-05 08:00:00'
where codigo = 1;

-- Finalizar Manutenção
update manutencao
set data_finalizada = now ()
where codigo = 1;

-- Alterar Descrição
update manutencao
set descricao = 'Manutenção Reagendada'
where codigo = 1;