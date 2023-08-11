package com.spring.project.backend.controller;

import com.spring.project.backend.entity.Producto;
import com.spring.project.backend.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping("/productos/filtrar-productos/{nombreProducto}")
    @ResponseStatus(code = HttpStatus.OK)
    public List<Producto> filtrarProductos(@PathVariable String nombreProducto) {
        return productoService.findByNombre(nombreProducto);
    }
}
