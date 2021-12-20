import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import './views/home/home.component';
import { HomeComponent } from './views/home/home.component';
import './views/products-crud/products-crud.component';
import { ProductsCrudComponent } from './views/products-crud/products-crud.component';


// Cada Objeto desse array traz uma rota da aplicação (Criada ao iniciar o Angular CLI) onde agora sera permitido navegar pelo crud
const routes: Routes = [{
  path:"",
  component:HomeComponent
},
{
  path:"produtos",
  component:ProductsCrudComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
