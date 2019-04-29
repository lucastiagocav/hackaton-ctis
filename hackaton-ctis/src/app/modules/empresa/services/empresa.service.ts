import { Injectable } from '@angular/core';
import { EmpresaCrudComponent } from '../components/empresa-crud/empresa-crud.component';
import { HttpClient } from '@angular/common/http';
import { EMPRESAS, API_URL } from 'src/environments/constantes';
import { EmpresaModels } from '../models/empresa-models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: EmpresaCrudComponent
})
export class EmpresaService {


  constructor(private http: HttpClient) { }

  get(): Observable<EmpresaModels[]> {
    return this.http.get<EmpresaModels[]>(`${API_URL}${EMPRESAS}`);

  }
  getById( id: number): Observable<EmpresaModels> {
    return this.http.get<EmpresaModels>(`${API_URL}${EMPRESAS}/${id}`);

  }
  // Cadastra no botão Confirmar do endpoint /cadastrar
  post(body: any): Observable<EmpresaModels> {
    return this.http.post<EmpresaModels>(`${API_URL}${EMPRESAS}`, body);

  }
  //Atualiza pelo ID - Implementar no botão Confirmar da aba editar
  put(body: any): Observable<EmpresaModels> {
    return this.http.put<EmpresaModels>(`${API_URL}${EMPRESAS}`, body);

  }
  //Deleta pelo ID
  delete(id: number): Observable<EmpresaModels> {
    return this.http.delete<EmpresaModels>(`${API_URL}${EMPRESAS}/${id}`);

  }
}
