import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Router } from '@angular/router'
import { Region } from '../model/region';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndpoint: string = 'http://localhost:8080/api/clientes';

  private urlEndpointRegion: string = 'http://localhost:8080/api/regiones';
  
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});


  constructor(private http: HttpClient, private router: Router) { 
  }

  getClientes(page: number): Observable<any> {
    return this.http.get<any>(this.urlEndpoint + '/page/' + page).pipe(
      map(json => {
          json.content as Cliente[];
          return json;
      })
    );
  }

  create(cliente: Cliente): Observable<any> {
    return this.http.post<any>(this.urlEndpoint, cliente, {headers: this.httpHeaders}).pipe(
      catchError(e => {

        if(e.status == 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        swal.fire( e.error.mensaje, 
                   e.error.error,
                   'error');
        return throwError(e);
      })
    );
  }



  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndpoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/clientes'])
        console.error(e.error.mensaje);
        swal.fire('Error al editar', 
                   e.error.mensaje, 
                   'error');
        return throwError(e);
      })
    );
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put(`${this.urlEndpoint}/${cliente.id}`, cliente, { headers: this.httpHeaders }).pipe(
      map((response: any) => response.cliente as Cliente),
      catchError(e => {

        if(e.status == 400) {
          return throwError(e);
        }
        
        console.error(e.error.mensaje);
        swal.fire( e.error.mensaje, 
                   e.error.error, 
                   'error');
        return throwError(e);
      })
    );;
  }

  delete(id: number):  Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.urlEndpoint}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal.fire( e.error.mensaje, 
                   e.error.error, 
                   'error');
        return throwError(e);
      })
    );;
  }

  getRegiones(): Observable<Region[]> {
    return this.http.get<Region[]>(this.urlEndpointRegion)
  }

}
