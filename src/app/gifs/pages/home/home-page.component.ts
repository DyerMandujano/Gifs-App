import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page-component.html',
})
export class HomePageComponent {

  //INYECTAMOS EL SERVICIO 'GifsService' MEDIANTE EL PARAMETRO DEL CONSTRUCTOR
  constructor( private gisfService:GifsService){
  }

  //CREAMOS UN METODO 'get' PARA HACER USO DEL SERVICIO Y OBTENER EL LISTADO DE GIFS
  get gifsListado():Gif[]{
      return this.gisfService.listaGifs;
  }
}
