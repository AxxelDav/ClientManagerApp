
--Tabla Regiones
INSERT INTO regiones (id, nombre) VALUES (1, 'Sudamérica');
INSERT INTO regiones (id, nombre) VALUES (2, 'Centroamérica');
INSERT INTO regiones (id, nombre) VALUES (3, 'Norteamérica');
INSERT INTO regiones (id, nombre) VALUES (4, 'Europa');
INSERT INTO regiones (id, nombre) VALUES (5, 'Asia');
INSERT INTO regiones (id, nombre) VALUES (6, 'Africa');
INSERT INTO regiones (id, nombre) VALUES (7, 'Oceanía');
INSERT INTO regiones (id, nombre) VALUES (8, 'Antártida');


--Tabla Clientes
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Axel', 'Cespedes', 'axel.cespedes@hotmail.com', '2023-12-11', 1);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Andres', 'Guzman', 'andy.guzman@hotmail.com', '2024-09-05', 2);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Carlos', 'Bizarrap', 'carl.biza@hotmail.com', '2022-04-10', 4);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Rocky', 'Balboa', 'rocky.balboa@hotmail.com', '2021-01-02', 4);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Lionel', 'Messi', 'lio.messi@hotmail.com', '2020-07-14', 5);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Wayne', 'Rooney', 'wayne.rooney@hotmail.com', '2019-11-11', 2);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Neymar', 'Junior', 'neymar.jr@hotmail.com', '2022-09-09', 3);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Xavi', 'Hernandez', 'xavi.hr@hotmail.com', '2022-01-09', 2);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Charly', 'Bizarrap', 'charly.biza@hotmail.com', '2022-04-10', 4);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Rambo', 'Balboa', 'rambo.balboa@hotmail.com', '2021-01-02', 5);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Scaloni', 'Messi', 'lio.scaloni@hotmail.com', '2020-07-14', 6);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Tyson', 'Rooney', 'wayne.tyson@hotmail.com', '2019-11-11', 7);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Maria', 'Lopez', 'maria.lopez@gmail.com', '2024-09-06', 8);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Juan', 'Rodriguez', 'juan.rodriguez@yahoo.com', '2024-09-07', 7);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Laura', 'Martinez', 'laura.martinez@gmail.com', '2024-09-08', 6);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Carlos', 'Garcia', 'carlos.garcia@hotmail.com', '2024-09-09', 4);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Ana', 'Perez', 'ana.perez@gmail.com', '2024-09-10', 5);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Luis', 'Sanchez', 'luis.sanchez@yahoo.com', '2024-09-11', 1);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Elena', 'Fernandez', 'elena.fernandez@hotmail.com', '2024-09-12', 7);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Amalia', 'Lopez', 'amalia.lopez@gmail.com', '2024-09-12', 6);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Marta', 'Gonzalez', 'marta.gonzalez@yahoo.com', '2024-09-14', 3);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Javier', 'Diaz', 'javier.diaz@gmail.com', '2024-09-15', 5);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Sofia', 'Hernandez', 'sofia.hernandez@hotmail.com', '2024-09-16', 4);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Diego', 'Torres', 'diego.torres@gmail.com', '2024-09-17', 2);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Carmen', 'Luna', 'carmen.luna@yahoo.com', '2024-09-18', 1);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Raul', 'Ortega', 'raul.ortega@gmail.com', '2024-09-19', 1);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ('Isabel', 'Vargas', 'isabel.vargas@hotmail.com', '2024-09-20', 3);


--Tabla Productos
INSERT INTO productos (nombre, precio, create_at) VALUES ('Panasonic Pantalla LCD', 259990, CURRENT_TIMESTAMP);
INSERT INTO productos (nombre, precio, create_at) VALUES ('Sony Auriculares Bluetooth', 8990, CURRENT_TIMESTAMP);
INSERT INTO productos (nombre, precio, create_at) VALUES ('Samsung Smartphone Galaxy', 499990, CURRENT_TIMESTAMP);
INSERT INTO productos (nombre, precio, create_at) VALUES ('LG Televisor LED 4K', 329990, CURRENT_TIMESTAMP);
INSERT INTO productos (nombre, precio, create_at) VALUES ('Apple iPad Pro', 799990, CURRENT_TIMESTAMP);
INSERT INTO productos (nombre, precio, create_at) VALUES ('Lenovo Laptop Ideapad', 599990, CURRENT_TIMESTAMP);
INSERT INTO productos (nombre, precio, create_at) VALUES ('Logitech Mouse Inalámbrico', 2490, CURRENT_TIMESTAMP);
INSERT INTO productos (nombre, precio, create_at) VALUES ('Corsair Teclado Mecánico', 79990, CURRENT_TIMESTAMP);
INSERT INTO productos (nombre, precio, create_at) VALUES ('Canon Cámara EOS', 1499990, CURRENT_TIMESTAMP);
INSERT INTO productos (nombre, precio, create_at) VALUES ('Microsoft Xbox Series X', 699990, CURRENT_TIMESTAMP);
INSERT INTO productos (nombre, precio, create_at) VALUES ('Nintendo Switch', 299990, CURRENT_TIMESTAMP);

--Tabla facturas y facturas_items
INSERT INTO facturas (descripcion, observacion, cliente_id, create_at) VALUES('Factura equipos de oficina', null, 1, CURRENT_TIMESTAMP);
INSERT INTO facturas_items (cantidad, factura_id, producto_id) VALUES(1, 1, 1);
INSERT INTO facturas_items (cantidad, factura_id, producto_id) VALUES(2, 1, 4);
INSERT INTO facturas_items (cantidad, factura_id, producto_id) VALUES(1, 1, 5);
INSERT INTO facturas_items (cantidad, factura_id, producto_id) VALUES(1, 1, 7);

INSERT INTO facturas (descripcion, observacion, cliente_id, create_at) VALUES('Factura Bicicleta', 'Nota Ejemplo', 1, CURRENT_TIMESTAMP);
INSERT INTO facturas_items (cantidad, factura_id, producto_id) VALUES(3, 2, 6);
