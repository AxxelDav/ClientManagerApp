package com.spring.project.backend.controller;

import com.spring.project.backend.entity.Factura;
import com.spring.project.backend.service.FacturaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class FacturaController {

    @Autowired
    private FacturaService facturaService;

    @GetMapping("/facturas/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public Factura findById(@PathVariable Long id) {
        return facturaService.findById(id);
    }

    @PostMapping("/facturas")
    @ResponseStatus(code = HttpStatus.CREATED)
    public Factura save(@RequestBody Factura factura) {
        return facturaService.save(factura);
    }

    @DeleteMapping("/facturas/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        facturaService.deleteById(id);
    }
}
