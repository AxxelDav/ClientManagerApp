import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../service/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  public cliente: Cliente = new Cliente();

  public titulo: string = "Crear Cliente";

  constructor(private clienteService: ClienteService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() { 
    this.cargarCliente();      
  }

  public create(): void {
    // console.log(this.cliente);
    this.clienteService.create(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/clientes'])
        swal.fire('Nuevo cliente', 'Cliente fue creado con éxito!', 'success')
      }
    )
  }

  cargarCliente(): void {
    this.activateRoute.params.subscribe(
      params => { 
        let id = params['id']
        if(id) {
          this.clienteService.getCliente(id).subscribe(
            cliente => this.cliente = cliente
          )
        }

      }
    )
  }


  update(): void {
    this.clienteService.update(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/clientes'])
        swal.fire('Cliente Actualizado', `Cliente ${cliente.nombre} actualizado con éxito!`, 'success')
      }
    )
  }

}
