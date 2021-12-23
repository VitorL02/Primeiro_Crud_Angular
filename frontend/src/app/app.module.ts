import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';


import { FooterComponent } from './components/template/footer/footer.component';
import { NavigationComponent } from './components/template/navigation/navigation.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'
import{MatFormFieldModule}from '@angular/material/form-field'
import{MatInputModule}from '@angular/material/input'
import{FormsModule}from '@angular/forms'


import { HomeComponent } from './views/home/home.component';
import { ProductsCrudComponent } from './views/products-crud/products-crud.component';
import { RedDirective } from './directives/red.directive';
import { ProductsCreateComponent } from './components/product/products-create/products-create.component';
import { RedBackgroundDirective } from './directives/red-background.directive';
import { BlueBackgroundDirective } from './directives/blue-background.directive';

import {HttpClientModule} from '@angular/common/http';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductReadTableModelComponent } from './components/product-read-table-model/product-read-table-model.component';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    ProductsCrudComponent,
    RedDirective,
    ProductsCreateComponent,
    RedBackgroundDirective,
    BlueBackgroundDirective,
    ProductReadComponent,
    ProductReadTableModelComponent,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule ,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [{
    //Realiza a conversão de casas decimais para nossa região
    provide: LOCALE_ID,
    useValue: 'pt-br'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
