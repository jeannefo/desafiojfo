package br.com.stefanini.desafiojfo.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.mapping.event.ValidatingMongoEventListener;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;

import br.com.stefanini.desafiojfo.api.config.DesafioJfoProperty;

@SpringBootApplication
@EnableConfigurationProperties(DesafioJfoProperty.class)
public class StefaniniDesafiojfoApplication {

	public static void main(String[] args) {
		SpringApplication.run(StefaniniDesafiojfoApplication.class, args);
	}

	@Bean
	public ValidatingMongoEventListener validatingMongoEventListener() {
		return new ValidatingMongoEventListener(validator());
	}

	@Bean
	public LocalValidatorFactoryBean validator() {
		return new LocalValidatorFactoryBean();
	}

}
