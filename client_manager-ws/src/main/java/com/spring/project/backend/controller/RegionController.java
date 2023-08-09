package com.spring.project.backend.controller;

import com.spring.project.backend.entity.Region;
import com.spring.project.backend.service.RegionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class RegionController {

    @Autowired
    private RegionService regionService;

    @GetMapping("/regiones")
    public List<Region> listarRegiones() {
        return regionService.findAll();
    }
}
