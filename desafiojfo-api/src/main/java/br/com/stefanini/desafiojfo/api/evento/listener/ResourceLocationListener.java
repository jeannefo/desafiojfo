package br.com.stefanini.desafiojfo.api.evento.listener;

import java.net.URI;

import javax.servlet.http.HttpServletResponse;

import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.stefanini.desafiojfo.api.evento.ResourceEvent;

@Component
public class ResourceLocationListener implements ApplicationListener<ResourceEvent> {

	@Override
	public void onApplicationEvent(ResourceEvent event) {
		adicionarHeaderLocation(event.getResponse(), event.getCodigo());
	}

	private void adicionarHeaderLocation(HttpServletResponse response, String codigo) {
		URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{codigo}").buildAndExpand(codigo).toUri();
		response.setHeader("location", uri.toASCIIString());
	}

}
