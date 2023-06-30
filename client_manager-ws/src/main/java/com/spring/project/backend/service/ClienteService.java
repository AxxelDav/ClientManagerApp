package com.spring.project.backend.service;

import com.spring.project.backend.entity.Cliente;

import java.util.List;

public interface ClienteService {

    public List<Cliente> findAll();

    public Cliente findById(Long id);

    public Cliente save(Cliente cliente);

    public void delete(Long id);


}
