import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import './views/home/home.component';
import { HomeComponent } from './views/home/home.component';
import './views/products-crud/products-crud.component';
import { ProductsCrudComponent } from './views/products-crud/products-crud.component';
import { ProductsCreateComponent } from './components/product/products-create/products-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';

// Cada Objeto desse array traz uma rota da aplicação (Criada ao iniciar o Angular CLI) onde agora sera permitido navegar pelo crud
const routes: Routes = [{
  path:"",
  component:HomeComponent
},
{
  path:"produtos",
  component:ProductsCrudComponent
},
{
  path:"produtos/create",
  component:ProductsCreateComponent
},
{
  path:"produtos/update/:id",
  component:ProductUpdateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
