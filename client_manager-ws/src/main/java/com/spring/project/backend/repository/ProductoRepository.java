package com.spring.project.backend.repository;

import com.spring.project.backend.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {

    @Query("select p from Producto p where p.nombre like %?1%")
    public List<Producto> findByNombre(String nombreProducto);

  //public List<Producto> findByNombreContainingIgnoreCase(String nombreProducto);
}
