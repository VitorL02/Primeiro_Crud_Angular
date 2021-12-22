import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

// service e criado para retirar o 'peso' dos componentes e inserir nele toda a logica ou ate mesmo o acesso ao backend

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private snackBar:MatSnackBar) { }

  showMessage(msg:string):void{
    this.snackBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:'right',
      verticalPosition:'top',
      panelClass:['black-snackbar']
    })

  }

}
