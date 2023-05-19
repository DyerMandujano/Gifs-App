import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  //CREAMOS ESTE INPUT PARA QUE PUEDA ALMACENAR TODA LA INFORMACIÓN ENVIADA DESDE EL PADRE 'Home-page' HACIA ESTE COMPONENTE HIJO 'CardListComponent'
  @Input()
  public listgifs: Gif[] = [];
}
