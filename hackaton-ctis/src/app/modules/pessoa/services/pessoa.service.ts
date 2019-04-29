import { Injectable } from '@angular/core';
import { API_URL, PESSOAS } from 'src/environments/constantes';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PessoaModels } from '../models/pessoa-models';

@Injectable({
  providedIn: PessoaService
})
export class PessoaService {
  constructor(private http: HttpClient) { }

  get(): Observable<PessoaModels[]> {
    return this.http.get<PessoaModels[]>(`${API_URL}${PESSOAS}`);

  }
  getById(id: number): Observable<PessoaModels> {
    return this.http.get<PessoaModels>(`${API_URL}${PESSOAS}/${id}`);

  }
  // Cadastra no botão Confirmar do endpoint /cadastrar
  post(body: any): Observable<PessoaModels> {
    return this.http.post<PessoaModels>(`${API_URL}${PESSOAS}`, body);

  }
  //Atualiza pelo ID - Implementar no botão Confirmar da aba editar
  put(body: any): Observable<PessoaModels> {
    return this.http.put<PessoaModels>(`${API_URL}${PESSOAS}`, body);

  }
  //Deleta pelo ID
  delete(id: number): Observable<PessoaModels> {
    return this.http.delete<PessoaModels>(`${API_URL}${PESSOAS}/${id}`);

  }
}
