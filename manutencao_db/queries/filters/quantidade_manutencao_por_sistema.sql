-- Quantidade de manutenções por sistema
select
ts.nome,
    count(*) as total
from manutencao m
join tipo_sistema ts on ts.codigo = m.codigo_tipo_sistema
group by ts.nome;
