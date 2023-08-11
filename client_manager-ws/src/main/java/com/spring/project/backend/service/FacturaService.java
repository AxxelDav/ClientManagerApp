package com.spring.project.backend.service;

import com.spring.project.backend.entity.Factura;

public interface FacturaService {

    public Factura findById(Long id);

    public Factura save(Factura factura);

    public void deleteById(Long id);
}
