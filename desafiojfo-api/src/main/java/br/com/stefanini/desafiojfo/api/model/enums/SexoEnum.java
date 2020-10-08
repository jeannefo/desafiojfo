package br.com.stefanini.desafiojfo.api.model.enums;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.STRING)
public enum SexoEnum {
	F("F", "Feminino"), M("M", "Masculino");

	private String value;
	private String label;

	private SexoEnum(String value, String label) {
		this.label = label;
		this.value = value;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
}
