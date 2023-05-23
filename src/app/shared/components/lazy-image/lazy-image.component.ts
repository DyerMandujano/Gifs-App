import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit {
  
  //*Creamos esta propiedad Input 'url' para recibir la URL que proviene del Componente padre 'gifs-card'
  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  //SI EN CASO LA URL ES UNDEFINED
  ngOnInit(): void {
    if(!this.url){
      //ARROJA UN ERROR
      throw new Error("La propiedad URL es requerida");
    }
  }

  //METODO QUE SE UTILIZARÁ CUANDO YA SE CARGO LA IMAGEN
  onLoad(){
    setTimeout(()=>{
      this.hasLoaded = true;
    },1000)
    
  }

}
