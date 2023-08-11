package com.spring.project.backend.service;

import com.spring.project.backend.entity.Producto;

import java.util.List;

public interface ProductoService {

    public List<Producto> findByNombre(String nombreProducto);
}
