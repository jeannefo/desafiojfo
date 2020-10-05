package br.com.stefanini.desafiojfo.api.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.stefanini.desafiojfo.api.model.Pessoa;
import br.com.stefanini.desafiojfo.api.repository.filters.PessoaFilter;

public interface PessoaService {

	public List<Pessoa> listar();

	public Page<Pessoa> listar(PessoaFilter filtro, Pageable pageable);

	public long quantidade();

	public Pessoa obterPorCodigo(String codigo);

	public List<Pessoa> obterPessoasNascidasIntervalo(LocalDate de, LocalDate ate);

	public Pessoa salvar(Pessoa pessoa);

	public void remover(String codigo);

	public Pessoa atualizar(String codigo, Pessoa pessoa);

}
