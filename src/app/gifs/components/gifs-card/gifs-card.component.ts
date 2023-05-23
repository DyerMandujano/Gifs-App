import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html'
})
export class GifsCardComponent implements OnInit {
  
  @Input()
  // A AL COLOCARLE EL SIMBOLO '!', ESTA PROPIEDAD VA A TENER SIEMPRE UN VALOR EL CUAL NUNCA SERÁ UNDEFINED
  public gifs!: Gif;

  ngOnInit(): void {

    //EN CASO DE QUE SEA UNDEFINED
    if(!this.gifs){
      //ARROJARÁ UN ERROR
      throw new Error('La propiedad gifs es requerida.');
    }
    
  }
}
