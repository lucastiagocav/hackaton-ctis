import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL, PRODUTOS } from 'src/environments/constantes';
import { ProdutoModels } from '../models/produto-models';

@Injectable({
  providedIn: ProdutoService
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  get(): Observable<ProdutoModels[]> {
    return this.http.get<ProdutoModels[]>(`${API_URL}${PRODUTOS}`);

  }
  getById(id: number): Observable<ProdutoModels> {
    return this.http.get<ProdutoModels>(`${API_URL}${PRODUTOS}/${id}`);

  }
  // Cadastra no botão Confirmar do endpoint /cadastrar
  post(body: any): Observable<ProdutoModels> {
    return this.http.post<ProdutoModels>(`${API_URL}${PRODUTOS}`, body);

  }
  //Atualiza pelo ID - Implementar no botão Confirmar da aba editar
  put( body: any): Observable<ProdutoModels> {
    return this.http.put<ProdutoModels>(`${API_URL}${PRODUTOS}`, body);

  }
  //Deleta pelo ID
  delete(id: number): Observable<ProdutoModels> {
    return this.http.delete<ProdutoModels>(`${API_URL}${PRODUTOS}/${id}`);

  }
}
