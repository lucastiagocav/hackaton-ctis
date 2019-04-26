import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {

  constructor(private http: HttpClient) { }

  get<T>(ENDPOINT: string): Observable<T> {
    return this.http.get<T>(`${API_URL}${ENDPOINT}`);

  }
  getById<T>(ENDPOINT: string, id: string): Observable<T> {
    return this.http.get<T>(`${API_URL}${ENDPOINT}/${id}`);

  }
  // Cadastra no botão Confirmar do endpoint /cadastrar
  post<T>(ENDPOINT: string, body: any): Observable<T> {
    return this.http.post<T>(`${API_URL}${ENDPOINT}`, body);

  }
  //Atualiza pelo ID - Implementar no botão Confirmar da aba editar
  put<T>(ENDPOINT: string, id: string, body: any): Observable<T> {
    return this.http.put<T>(`${API_URL}${ENDPOINT}/${id}`, body);

  }
  //Deleta pelo ID
  delete<T>(ENDPOINT: string, id: string): Observable<T> {
    return this.http.delete<T>(`${API_URL}${ENDPOINT}/${id}`);

  }
}
