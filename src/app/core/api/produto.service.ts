import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponse, Produto} from "../model/common.model";
import {ApiEndpoint} from "../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  findAllProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(ApiEndpoint.Produtos.All);
  }

  deletarProdutoPorId(produtoId: number): Observable<any> {
    return this.http.delete(`${ApiEndpoint.Produtos.DeletarPorId}/${produtoId}`);
  }

  registerProduct(payLoad: Produto, files: File[]) {
    const formData = new FormData();
    const token = localStorage.getItem("USER_TOKEN");
    formData.append('produto', new Blob([JSON.stringify(payLoad)], {type: 'application/json'}));

    files.forEach((file)=> {
      formData.append('files', file);
    });

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })

    return this.http.post<ApiResponse<Produto>>(
      `${ApiEndpoint.Produtos.Cadastrar}`,
      formData, { headers }
    )
  }

}
