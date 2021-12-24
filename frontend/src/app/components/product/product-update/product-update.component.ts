import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';
import { Produto } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  produto: Produto;

  constructor(private productService: ProductService, private router:Router, private route: ActivatedRoute,private headerService:HeaderService) {
    headerService.headerData={
      title:'Editar Produto',
      icon:'autorenew',
      routerUrl:'/produtos'
    }
   }

  //Para que o formulario venha preenchido foi necessario receber o id via rotas assim conseguindo receber os dados do produto
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.productService.readProductById(id).subscribe((produto) =>{
    this.produto = produto;
  });
  }

  updateProduct():void{
    this.productService.updateProductService(this.produto).subscribe(()=>{
      this.productService.showMessage('Produto Alterado com Sucesso!')
      this.router.navigate(['/produtos']);
    })
  }
  cancel(): void{
    this.router.navigate(['/produtos'])
  }

}
