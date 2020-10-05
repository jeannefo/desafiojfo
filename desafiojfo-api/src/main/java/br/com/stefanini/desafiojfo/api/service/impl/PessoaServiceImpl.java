package br.com.stefanini.desafiojfo.api.service.impl;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.stefanini.desafiojfo.api.model.Pessoa;
import br.com.stefanini.desafiojfo.api.repository.PessoaRepository;
import br.com.stefanini.desafiojfo.api.repository.filters.PessoaFilter;
import br.com.stefanini.desafiojfo.api.service.PessoaService;

@Service
public class PessoaServiceImpl implements PessoaService {

	@Autowired
	private PessoaRepository pessoaRepository;

	@Override
	public List<Pessoa> listar() {
		return this.pessoaRepository.findAll();
	}

	@Override
	public Pessoa obterPorCodigo(String codigo) {
		Optional<Pessoa> pessoaOptional = this.pessoaRepository.findById(codigo);
		Pessoa pessoaEncontrada = pessoaOptional.orElseThrow(() -> new EmptyResultDataAccessException(1));
		return pessoaEncontrada;
	}

	@Override
	public Pessoa salvar(Pessoa pessoa) {

		pessoa.setDataCadastro(LocalDateTime.now());
		pessoa.setDataAtualizacao(LocalDateTime.now());
		return this.pessoaRepository.save(pessoa);
	}

	public void remover(String codigo) {
		this.pessoaRepository.deleteById(codigo);
	}

	@Override
	public List<Pessoa> obterPessoasNascidasIntervalo(LocalDate de, LocalDate ate) {
		return this.pessoaRepository.obterPessoasNascidasIntervalo(de, ate);
	}

	@Override
	public long quantidade() {
		return this.pessoaRepository.count();
	}

	@Override
	public Pessoa atualizar(String codigo, Pessoa pessoa) {
		Pessoa pessoaSalva = obterPorCodigo(codigo);
		pessoa.setDataCadastro(pessoaSalva.getDataCadastro());
		pessoa.setDataAtualizacao(LocalDateTime.now());
		BeanUtils.copyProperties(pessoa, pessoaSalva, "codigo");
		return this.pessoaRepository.save(pessoaSalva);
	}

	@Override
	public Page<Pessoa> listar(PessoaFilter filtro, Pageable pageable) {
		return this.pessoaRepository.filtrar(filtro, pageable);
	}

}
