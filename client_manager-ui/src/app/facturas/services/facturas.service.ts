import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';
import { Factura } from '../models/factura';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  private urlEndpointFacturas: string = 'http://localhost:8080/api/facturas';

  private urlEndpointProductos: string = 'http://localhost:8080/api/productos';
  
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});


  constructor(private http: HttpClient, private router: Router) { 
  }

  getFactura(id: number): Observable<Factura> {
    return this.http.get<Factura>(`${this.urlEndpointFacturas}/${id}`);
  }

  deleteFactura(id: number): Observable<Factura> {
    return this.http.delete<Factura>(`${this.urlEndpointFacturas}/${id}`);
  }

  filtrarProductos(nombreProducto: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.urlEndpointProductos}/filtrar-productos/${nombreProducto}`);
  }

  createFactura(factura: Factura): Observable<Factura> {
    return this.http.post<Factura>(this.urlEndpointFacturas, factura);
  }
}
