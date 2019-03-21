package com.coopersystem.back.controller;

import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coopersystem.back.domain.Client;
import com.coopersystem.back.repository.ClientRepository;

@RestController
@CrossOrigin
public class ClientController {

	private ClientRepository clientRepository;

	public ClientController(ClientRepository clientRepository) {
		this.setClientRepository(clientRepository);
	}

	@RequestMapping("/list")
	public Iterable<Client> list() {
		return this.clientRepository.findAll();
	}
	
	@RequestMapping("/one/{id}")
	public Optional<Client> one(@PathVariable String id) {
		return this.clientRepository.findById(id);
	}
	
	@PostMapping("/login")
	public String login() {
		return "{}";
	}

	@PostMapping("/add")
	public Client add(@RequestBody Client client) {
		return clientRepository.save(client);
	}

	@PostMapping("/edit")
	public Client edit(@RequestBody Client client) {
		return clientRepository.save(client);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteEmployee(@PathVariable String id) {
		clientRepository.deleteById(id);
	}

	public ClientRepository getClientRepository() {
		return clientRepository;
	}

	public void setClientRepository(ClientRepository clientRepository) {
		this.clientRepository = clientRepository;
	}
}
