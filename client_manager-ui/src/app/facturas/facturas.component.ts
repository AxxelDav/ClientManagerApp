import { Component } from '@angular/core';
import { Factura } from './models/factura';
import { ClienteService } from '../clientes/service/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, flatMap, map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
import { FacturasService } from './services/facturas.service';
import { Producto } from './models/producto';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ItemFactura } from './models/item-factura';
import swal from 'sweetalert2';


@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent {

  titulo: string = 'Nueva Factura';
  factura: Factura = new Factura;

  autoCompleteControl = new FormControl();
  productosFiltrados: Observable<Producto[]>;

  constructor(private clienteService: ClienteService, 
              private activateRoute: ActivatedRoute,
              private router: Router,
              private facturaService: FacturasService) {}

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(params => {
      let clientId = +params.get('clienteId');
      this.clienteService.getCliente(clientId).subscribe(cliente => this.factura.cliente = cliente)
    });

    this.productosFiltrados = this.autoCompleteControl.valueChanges
      .pipe(
        map(value => typeof value === 'string' ? value : value.nombre),
        flatMap(value => value ? this._filter(value) : [])
      );
  }

  
  private _filter(value: string): Observable<Producto[]> {
    const filterValue = value.toLowerCase();
    return this.facturaService.filtrarProductos(filterValue);
  }

  mostrarNombreProducto(producto?: Producto): string | undefined {
    return producto ? producto.nombre : undefined;
  }

  seleccionarProducto(event: MatAutocompleteSelectedEvent): void {
    let producto = event.option.value as Producto;
    console.log(producto);

    if(this.existeItem(producto.id)) {
      this.incrementaCantidad(producto.id)
    } else {
      let nuevoItem = new ItemFactura();
      nuevoItem.producto = producto;
      this.factura.items.push(nuevoItem);
    }

    this.autoCompleteControl.setValue('');
    event.option.focus();
    event.option.deselect();
  }


  actualizarCantidad(idProducto: number, event: any) {
    let cantidad: number = event.target.value as number;

    if(cantidad == 0) {
      return this.eliminarItemFactura(idProducto);
    }

    this.factura.items = this.factura.items.map((item: ItemFactura) => {
      if(item.producto.id == idProducto) {
        item.cantidad = cantidad;
      }
      return item;
    })
  }


  existeItem(idProducto: number): boolean {
    let existe = false;
    this.factura.items.forEach((item: ItemFactura) => {
      if(item.producto.id === idProducto) {
        existe = true;
      }
    });
    return existe;
  }

  incrementaCantidad(idProducto: number): void {
    this.factura.items = this.factura.items.map((item: ItemFactura) => {
      if(item.producto.id == idProducto) {
        ++item.cantidad;
      }
      return item;
    })
  }

  eliminarItemFactura(idProducto: number): void {
    this.factura.items = this.factura.items.filter((item: ItemFactura) => idProducto != item.producto.id);
  }

  create():void {
    console.log("Factura creada: " + this.factura);
    this.facturaService.createFactura(this.factura).subscribe(factura => {
      swal.fire(this.titulo, `Factura ${factura.descripcion} creada con éxito!`, 'success');
      this.router.navigate(['/clientes'])
    })
  }

}
