import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit(): void {
    this.productService.showMessage('Produto Cadastrado Com Sucesso')
  }

  creatProduct():void{
    this.productService.showMessage('Produto Criado')
  }
  cancel():void{
    this.router.navigate(['/produtos'])

  }

}
