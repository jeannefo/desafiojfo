package br.com.stefanini.desafiojfo.api.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import br.com.stefanini.desafiojfo.api.model.Pessoa;
import br.com.stefanini.desafiojfo.api.repository.pessoa.PessoaRepositoryQuery;

public interface PessoaRepository extends MongoRepository<Pessoa, String>, PessoaRepositoryQuery {

	@Query("{ $and: [{'dataNascimento' : {$gte:?0}}, {'dataNascimento':{$lte:?1}}] }")
	public List<Pessoa> obterPessoasNascidasIntervalo(LocalDate de, LocalDate ate);

	public List<Pessoa> findByCodigo(String codigo);

}
