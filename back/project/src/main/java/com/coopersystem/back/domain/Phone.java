package com.coopersystem.back.domain;

import javax.persistence.Entity;


@Entity
public final class Phone {

	private Integer number;

	public Phone() { }

	public Phone(Integer number) {
		this.setNumber(number);
	}

	public Integer getNumber() {
		return number;
	}

	public void setNumber(Integer number) {
		this.number = number;
	}
}
