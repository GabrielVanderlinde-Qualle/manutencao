-- Manutenções em aberto ordenadas por data
select *
from manutencao
where data_finalizada is null
order by data_agendamento asc;
