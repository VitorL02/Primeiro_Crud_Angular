import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData>({
    title:'Início',
    icon:'home',
    routerUrl:''
  });

  constructor() { }

  //Acessa e altera os parametros para alterar internamente o titulo o icone e o router
  get headerData():HeaderData{
    return this._headerData.value
  }

  set headerData(headerData:HeaderData){
    this._headerData.next(headerData)
  }
}
