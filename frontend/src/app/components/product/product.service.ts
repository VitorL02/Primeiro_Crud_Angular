import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Produto } from './product.model';

// service e criado para retirar o 'peso' dos componentes e inserir nele toda a logica ou ate mesmo o acesso ao backend

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  urlBackend= 'http://localhost:3030/produtos'

  constructor( private snackBar:MatSnackBar,private http: HttpClient) { }

  showMessage(msg:string):void{
    this.snackBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:'right',
      verticalPosition:'top',
      panelClass:['black-snackbar']
    })

  }
    //Esta função post retorna um observable(forma de ficar sempre atento caso alguma alteração ocorra dentro de produto)
  create(produto:Produto): Observable<Produto>{
    return this.http.post<Produto>(this.urlBackend,produto)
  }

  readProduct():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.urlBackend)
  }

  readProductById(id:string): Observable<Produto>{
    const urlProdutoId = `${this.urlBackend}/${id}`
    return this.http.get<Produto>(urlProdutoId)
  }

  updateProduct(produto:Produto):Observable <Produto>{
    const urlProdutoId = `${this.urlBackend}/${produto.id}`
    return this.http.put<Produto>(urlProdutoId,produto)
  }
  
}
