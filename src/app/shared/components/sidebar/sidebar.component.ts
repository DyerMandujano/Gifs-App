import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsService: GifsService){
    
  }

  //CREAMOS EL GETTER 'myTags' PARA TRAER LOS VALORES DEL ARRAY QUE SE ENCUENTRAN EN EL GETTER 'tagsHistory' DEL SERVICIO gifs.service.
  get myTags(){
    return this.gifsService.tagsHistory;
  }

  //CUANDO SE REALICE EL EVENTO CLICK, LLAMAREMOS A ESTE METODO
   listadosGifs(tag: string){
    console.log("entra en metodo ser del sidebar")
    //REALIZA LA BUSQUEDA DE LOS GIFS MEDIANTE EL TAG PASADO POR PARAMETRO
    this.gifsService.BuscadorTag(tag);
  }

  
}
