import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../template/header/header.service';
import { Produto } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  produtos: Produto[] = []; 
  displayedColumns = ['id','name','price','action'];

  constructor(private produtoService:ProductService,private headerService:HeaderService) { 
    headerService.headerData={
      title:'Lista de Produtos',
      icon:'storefront',
      routerUrl:'/produtos'
    }
  }

  ngOnInit(): void {
    this.produtoService.readProduct().subscribe(produtos =>{ 
    this.produtos = produtos
    console.log(produtos)
    })
  }

  

}
