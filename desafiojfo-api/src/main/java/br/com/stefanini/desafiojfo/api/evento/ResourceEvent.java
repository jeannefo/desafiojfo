package br.com.stefanini.desafiojfo.api.evento;

import javax.servlet.http.HttpServletResponse;

import org.springframework.context.ApplicationEvent;

public class ResourceEvent extends ApplicationEvent {

	private static final long serialVersionUID = 1L;

	private HttpServletResponse response;
	private String codigo;

	public ResourceEvent(Object source, HttpServletResponse response, String codigo) {
		super(source);
		this.response = response;
		this.codigo = codigo;
	}

	public HttpServletResponse getResponse() {
		return response;
	}

	public String getCodigo() {
		return codigo;
	}
}
