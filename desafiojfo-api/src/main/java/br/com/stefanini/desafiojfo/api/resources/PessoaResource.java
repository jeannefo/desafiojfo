package br.com.stefanini.desafiojfo.api.resources;

import java.time.LocalDate;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.stefanini.desafiojfo.api.evento.ResourceEvent;
import br.com.stefanini.desafiojfo.api.model.Pessoa;
import br.com.stefanini.desafiojfo.api.repository.filters.PessoaFilter;
import br.com.stefanini.desafiojfo.api.service.PessoaService;

@RestController
@RequestMapping("/pessoas")
public class PessoaResource {
	@Autowired
	private PessoaService pessoaService;

	@Autowired
	private ApplicationEventPublisher publisher;

	@GetMapping
	@PreAuthorize("#oauth2.hasScope('read')")
	public Page<Pessoa> listar(PessoaFilter filtro, Pageable pageable) {
		return this.pessoaService.listar(filtro, pageable);
	}

	@GetMapping("/{codigo}")
	@PreAuthorize("#oauth2.hasScope('read')")
	public ResponseEntity<Pessoa> obterPorCodigo(@PathVariable String codigo) {
		return ResponseEntity.ok(this.pessoaService.obterPorCodigo(codigo));
	}

	@PostMapping
	@PreAuthorize("#oauth2.hasScope('write')")
	public ResponseEntity<?> cadastrar(@Valid @RequestBody Pessoa pessoa, HttpServletResponse response) {
		Pessoa pessoaSalva = this.pessoaService.salvar(pessoa);

		publisher.publishEvent(new ResourceEvent(this, response, pessoaSalva.getCodigo()));

		return ResponseEntity.status(HttpStatus.CREATED).body(pessoaSalva);
	}

	@PutMapping("/{codigo}")
	@PreAuthorize("#oauth2.hasScope('write')")
	public ResponseEntity<Pessoa> atualizar(@PathVariable String codigo, @Valid @RequestBody Pessoa pessoa) {
		Pessoa pessoaSalva = this.pessoaService.atualizar(codigo, pessoa);

		return ResponseEntity.ok(pessoaSalva);
	}

	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("#oauth2.hasScope('write')")
	public void remover(@PathVariable String codigo) {
		this.pessoaService.remover(codigo);
	}

	@GetMapping("/range")
	@PreAuthorize("#oauth2.hasScope('read')")
	public List<Pessoa> obterPessoasNascidasIntervalo(@RequestParam String de, @RequestParam String ate) {
		return this.pessoaService.obterPessoasNascidasIntervalo(LocalDate.parse(de), LocalDate.parse(ate));
	}
}
