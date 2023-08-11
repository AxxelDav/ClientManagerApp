import { Component, OnInit } from '@angular/core';
import { Cliente } from '../clientes/model/cliente';
import { ClienteService } from '../clientes/service/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FacturasService } from '../facturas/services/facturas.service';
import { Factura } from '../facturas/models/factura';
import swal from 'sweetalert2';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  public cliente: Cliente = new Cliente();

  public factura: Factura;


  constructor(private clienteService: ClienteService, 
              private router: Router, 
              private activateRoute: ActivatedRoute,
              private facturasService: FacturasService) { }

  ngOnInit() { 
    this.cargarCliente();       
  }


  cargarCliente(): void {
    this.activateRoute.params.subscribe(
      params => { 
        let id = params['id']
        if(id) {
          this.clienteService.getCliente(id).subscribe(
            cliente => this.cliente = cliente
          )}
      })
  }

  delete(factura): void {
    swal.fire({
      title: 'Estas seguro?',
      text: `¿Seguro que deseas eliminar la factura ${factura.descripcion}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {

        this.facturasService.deleteFactura(factura.id).subscribe(
          () => {
            this.cliente.facturas = this.cliente.facturas.filter(f => f !== factura)
            swal.fire(
              'Factura Eliminado!',
              `Factura ${factura.descripcion} eliminada con éxito`,
              'success'
            )
          }
        )
      }
    })
  }

}
