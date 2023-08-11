package com.spring.project.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@Entity
@Table(name = "clientes")
public class Cliente implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre", nullable = false)
    @NotEmpty(message = "no debe estar vacío")
    @Size(min = 4, max = 12, message = "el tamaño debe estar entre 4 y 12")
    private String nombre;

    @Column(name = "apellido")
    @NotEmpty(message = "no debe estar vacío")
    private String apellido;

    @Column(name = "email", nullable = false, unique = true)
    @NotEmpty(message = "no debe estar vacío")
    @Email(message = "debe ser una dirección de correo electrónico con formato correcto")
    private String email;

    @Column(name = "create_at")
    @NotNull(message = "no debe estar vacío")
    @Temporal(TemporalType.DATE)
    private Date createAt;

    @NotNull(message = "la región no debe estar vacía")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "region_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Region region;

    @JsonIgnoreProperties(value = {"cliente", "hibernateLazyInitializer", "handler"}, allowSetters = true)
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "cliente", cascade = CascadeType.ALL)
    private List<Factura> facturas;



    public Cliente() {
        this.facturas = new ArrayList<>();
    }

//    @PrePersist
//    public void prePersist() {
//        this.createAt = new Date();
//    }

}
