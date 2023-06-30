import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './service/cliente.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent {

  clientes: Cliente[];

  constructor(private clienteService : ClienteService) { 
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

  ngOnInit(): void {
    
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
