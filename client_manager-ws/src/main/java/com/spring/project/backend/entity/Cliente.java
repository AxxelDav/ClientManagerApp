package com.spring.project.backend.entity;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.Date;

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
    @Temporal(TemporalType.DATE)
    private Date createAt;


    @PrePersist
    public void prePersist() {
        createAt = new Date();
    }

}
