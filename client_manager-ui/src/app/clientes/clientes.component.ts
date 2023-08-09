import { Component } from '@angular/core';
import { Cliente } from './model/cliente';
import { ClienteService } from './service/cliente.service';
import swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent {

  public clientes: Cliente[];

  public paginador: any;

  constructor(private clienteService : ClienteService, private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.activateRoute.paramMap.subscribe(params => { 
      let page: number = +params.get('page');

      if(!page) 
        page = 0;

      this.clienteService.getClientes(page)
        .subscribe(json => {
          this.clientes = json.content as Cliente[];
          this.paginador = json;
        });
    })
  }

  delete(cliente: Cliente): void {

    swal.fire({
      title: 'Estas seguro?',
      text: `¿Seguro que deseas eliminar el cliente ${cliente.nombre} ${cliente.apellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        this.clienteService.delete(cliente.id).subscribe(
          response => {

            this.clientes = this.clientes.filter(
              cli => cli !== cliente
            )

            swal.fire(
              'Cliente Eliminado!',
              `Cliente ${cliente.nombre} eliminado con éxito`,
              'success'
            )
          }
        )
      }
    })
  }
}
