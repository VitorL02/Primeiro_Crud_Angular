import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  produto:Produto;

  constructor(private productService: ProductService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.productService.readProductById(id).subscribe((produto)=>{
      this.produto=produto
      console.log(produto.id)
    })
  }

  deleteProduct():void{
    this.productService.deleteProduct(this.produto.id).subscribe(()=>{
      this.productService.showMessage('Produto deletado com sucesso!');
      this.router.navigate(['/produtos']);
    })
  }


  cancel():void{
    this.router.navigate(['/produtos'])
  }

  

}
