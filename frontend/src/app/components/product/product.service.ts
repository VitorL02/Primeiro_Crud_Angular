import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Produto } from './product.model';

// service e criado para retirar o 'peso' dos componentes e inserir nele toda a logica ou ate mesmo o acesso ao backend

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  urlBackend= 'http://localhost:3030/produtos'

  constructor( private snackBar:MatSnackBar,private http: HttpClient) { }

  showMessage(msg:string, isError:boolean = false):void{
    this.snackBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:'right',
      verticalPosition:'top',
      panelClass: isError ? ['error-snackbar'] :['sucess-snackbar']
    })

  }
    //Esta função post retorna um observable(forma de ficar sempre atento caso alguma alteração ocorra dentro de produto)
  create(produto:Produto): Observable<Produto>{
    return this.http.post<Produto>(this.urlBackend,produto).pipe(
      map((obj) => obj),
      catchError(e=>this.errorHandler(e))
    );
  }

    //Retorna um observable vazio para receber o problema real seja do backend ou produto ou qualquer outro erro
    errorHandler(e:any):Observable<any>{
      this.showMessage('Ocorreu um erro, tente novamente mais tarde',true)
        return EMPTY
    }

  readProduct():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.urlBackend)
  }

  readProductById(id:number): Observable<Produto>{
    const urlProdutoId = `${this.urlBackend}/${id}`
    return this.http.get<Produto>(urlProdutoId).pipe(
      map((obj) => obj),
      catchError(e=>this.errorHandler(e))
    );
  }

  updateProductService(produto:Produto):Observable <Produto>{
    const urlProdutoId = `${this.urlBackend}/${produto.id}`
    return this.http.put<Produto>(urlProdutoId,produto).pipe(
      map((obj) => obj),
      catchError(e=>this.errorHandler(e))
    );
  }

  deleteProduct(id:number):Observable<Produto>{
    const urlProdutoId = `${this.urlBackend}/${id}`
    return this.http.delete<Produto>(urlProdutoId).pipe(
      map((obj) => obj),
      catchError(e=>this.errorHandler(e))
    );
  }

  
}
