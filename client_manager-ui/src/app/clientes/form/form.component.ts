import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { Region } from '../model/region';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  public cliente: Cliente = new Cliente();

  public regiones: Region[];

  public titulo: string = "Crear Cliente";

  public errores: string[];

  constructor(private clienteService: ClienteService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() { 
    this.cargarCliente();   
    this.cargarRegiones(); 
  }

  public create(): void {
    this.clienteService.create(this.cliente).subscribe(
      json => {
        this.router.navigate(['/clientes'])
        swal.fire('Nuevo cliente', `${json.mensaje}: ${json.cliente.nombre}`, 'success')
      },
      err => {
        this.errores = err.error.errors as string[];
        console.error('Código del error desde el backend: ' + err.status);
        console.error(err.error.errors);
      }
    );
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

  cargarRegiones():void {
    this.clienteService.getRegiones().subscribe(
      regiones => this.regiones = regiones);
  }


  update(): void {
    this.clienteService.update(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/clientes'])
        swal.fire('Cliente Actualizado', `Cliente ${cliente.nombre} ha sido actualizado con éxito!`, 'success')
      },
      err => {
        this.errores = err.error.errors as string[];
        console.error('Código del error desde el backend: ' + err.status);
        console.error(err.error.errors);
      }
    )
  }

  compararRegion(o1: Region, o2: Region): boolean { //o1 --> cada region del Select.  o2 --> region del Cliente
    if(o1 === undefined && o2 === undefined) {
      return true;
    }
    return o1 == null || o2 == null ? false : o1.id === o2.id;
  }

}
