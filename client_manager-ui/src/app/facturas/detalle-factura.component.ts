import { Component } from '@angular/core';
import { FacturasService } from './services/facturas.service';
import { Factura } from './models/factura';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.component.html',
  styleUrls: ['./detalle-factura.component.css']
})
export class DetalleFacturaComponent {

  factura: Factura;
  titulo: string = 'Factura';

  constructor(private facturaService: FacturasService, 
              private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params => {
      let id: number = +params.get('id');
      
      this.facturaService.getFactura(id).subscribe(factura => {
        this.factura = factura as Factura;
      })
    })
  }

}
