package br.com.stefanini.desafiojfo.api.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("desafiojfo")
public class DesafioJfoProperty {

	private boolean enableHttps;
	private String originPermitida = "http://localhost:4200";

	public String getOriginPermitida() {
		return originPermitida;
	}

	public void setOriginPermitida(String originPermitida) {
		this.originPermitida = originPermitida;
	}

	public boolean isEnableHttps() {
		return enableHttps;
	}

	public void setEnableHttps(boolean enableHttps) {
		this.enableHttps = enableHttps;
	}
}
