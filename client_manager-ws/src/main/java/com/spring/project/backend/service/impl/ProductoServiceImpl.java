package com.spring.project.backend.service.impl;

import com.spring.project.backend.entity.Producto;
import com.spring.project.backend.repository.ProductoRepository;
import com.spring.project.backend.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ProductoServiceImpl implements ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Producto> findByNombre(String nombreProducto) {
        return productoRepository.findByNombre(nombreProducto);
    }
}
