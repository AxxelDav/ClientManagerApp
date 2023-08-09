package com.spring.project.backend.repository;

import com.spring.project.backend.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteDao extends JpaRepository<Cliente, Long> {

//    @Query("from Region")
//    public List<Region> findAllRegiones();
}
