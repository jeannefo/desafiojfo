package br.com.stefanini.desafiojfo.api.repository.pessoa;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import br.com.stefanini.desafiojfo.api.model.Pessoa;
import br.com.stefanini.desafiojfo.api.repository.filters.PessoaFilter;

public class PessoaRepositoryQueryImpl implements PessoaRepositoryQuery {

	@Autowired
	private MongoOperations mongoOps;

	@Override
	public Page<Pessoa> filtrar(PessoaFilter filtro, Pageable pageable) {
		Query query = new Query();
		filtrarConsulta(query, filtro);
		query.with(pageable);
		List<Pessoa> result = mongoOps.find(query, Pessoa.class);

		return new PageImpl<>(result, pageable, obterQtdeRegistros(filtro));
	}

	private Long obterQtdeRegistros(PessoaFilter filtro) {
		Query query = new Query();
		filtrarConsulta(query, filtro);
		List<Pessoa> result = mongoOps.find(query, Pessoa.class);

		return Long.valueOf(result.size());
	}

	private void filtrarConsulta(Query query, PessoaFilter filtro) {

		if (filtro == null) {
			return;
		}

		if (StringUtils.isNotEmpty(filtro.getNome())) {
			query.addCriteria(Criteria.where("nome").regex("^" + filtro.getNome(), "ix"));
		}

		if (StringUtils.isNotEmpty(filtro.getSexo())) {
			query.addCriteria(Criteria.where("sexo").regex("^" + filtro.getSexo(), "ix"));
		}

		if (StringUtils.isNotEmpty(filtro.getCpf())) {
			query.addCriteria(Criteria.where("cpf").is(filtro.getCpf()));
		}

	}

}
