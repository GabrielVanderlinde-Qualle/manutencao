select
    m.codigo,
    ts.nome as sistema,
    tope.nome as operacao,
    tc.nome as criticidade,
    m.data_cadastro,
    m.data_agendamento,
    m.data_finalizada,
    m.descricao
from manutencao m
join tipo_sistema ts on ts.codigo = m.codigo_tipo_sistema
join tipo_operacao tope on tope.codigo = m.codigo_tipo_operacao
join tipo_criticidade tc on tc.codigo = m.codigo_tipo_criticidade
order by m.data_cadastro desc;
