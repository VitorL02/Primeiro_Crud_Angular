import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Produto } from '../product.model';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  produto:Produto = {
    name:'',
    price: null
  }

  constructor(private productService: ProductService, private router:Router,private headerService:HeaderService) {
    headerService.headerData={
      title:'Cadastro de Produtos',
      icon:'create',
      routerUrl:'/produtos/create'
    }
   }

  ngOnInit(): void {
  }

  creatProduct():void{
    // Metodo Subriscribe notifica quando a resposta foi entregue para o servidor
    this.productService.create(this.produto).subscribe(()=>{
       this.productService.showMessage('Produto Cadastrado com sucesso')
        this.router.navigate(['/produtos'])
    })


  }

  cancel():void{
    this.router.navigate(['/produtos'])

  }

}
