package com.coopersystem.back.domain;

import java.awt.List;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;


@EntityScan
public final class Client {
	@Id
	private String id;
	@Field
	private String name;
	@Field
	private String cpf;
	@Field
	private String email;
	@Field
	private Address address;
	@Field
	private List phone;

	public Client() {
	}

	public Client(String name, String cpf, String email, Address address,
			List phone) {
		this.setName(name);
		this.setCpf(cpf);
		this.setEmail(email);
		this.setAddress(address);
		this.setPhone(phone);
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List getPhone() {
		return phone;
	}

	public void setPhone(List phone) {
		this.phone = phone;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}
}
