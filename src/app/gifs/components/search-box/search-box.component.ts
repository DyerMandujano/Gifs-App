import { Component, ViewChild,ElementRef } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'gifs-search-box',
    template:`
        <h5>Buscar:</h5>
        <!-- SIN UTILIZAR VIEW CHILD -->
        <!-- La referencia local '#txtTagInput' NOS SIRVE  PARA HACER LA REFERENCIA A ESTE 'input' EN TODO EL TEMPLATE MAS NO EN EL APARTADO DEL TS.
        POR LO CUAL PODEMOS ACCEDER A TODOS SUS METODOS ESPECIALES Y PROPIEDADES DE ESTE INPUT MEDIANTE SU REFERENCIA, ES POR ELLO QUE EN ESTE CASO ESTAMOS UTILIZANDO LA PROPIEDAD 'value' DEL 'txtTagInput' PARA OBTENER SU VALOR CUANDO HAYA OCURRIDO EL EVENTO (Keyup.enter) LLAMANDO A LA FUNCION 'searchTag'-->
        <!-- NOTA: COLOCAMOS EL EVENTO '(Keyup.enter)' YA QUE NO QUEREMOS QUE AL MOMENTO DE QUE SE SUELTE LA TECLA 'Keyup' HAGA UN LLAMADO CADA QUE SIEMPRE PASE ESO, SINO QUE LO REALICE CUANDO SE LEVANTE LA TECLA ENTER -->
        <!-- EN SINTESIS, AL MOMENTO DE QUE HAYA OCURRIDO EL EVENTO (Keyup.enter) DENTRO DEL INPUT, ESTE LLAMA A LA FUNCIÓN 'searchTag' Y COMO PARAMETRO LE ESTAMOS PASANDO EL VALOR (LA PROPIEDAD 'value') QUE SE ENCUENTRE DENTRO DE ESE INPUT MEDIATE LA REFERENCIA ' #txtTagInput' -->
        <!-- (keyup.enter)="searchTag(txtTagInput.value) -->
        
        <input type="text" class="form-control" 
         placeholder="Buscar gifs" (keyup.enter)="searchTag()"
        #txtTagInput>
        
    `
})

export class SearchBoxComponent {

    //*EN ESTE CASO, El decorador '@ViewChild' NOS SIRVE PARA PODER ACCEDER O ENLAZARNOS A LOS ELEMENTOS DEL DOM DE UN COMPONENTE Y CON LA AYUDA DE UNA REFERENCIA ,QUE LE PASAMOS POR PARAMETRO, PODEMOS HACER USO DE SUS PROPIEDADES Y METODOS DE ESE ELEMENTO O ETIQUETA HTML.
    //!NOTA: DENTRO DE LOS PARENTESIS DEL '@ViewChild' DEBEMOS COLOCAR EL ELEMENTO O ETIQUIETA HTML QUE DESEAMOS TOMAR. EN ESTE CASO ES EL 'INPUT', PERO COMO NO QUIERO Q TODOS LOS INPUTS REALIZAN ESTA ACCION, LO UNICO QUE DEBEMOS COLOCAR ES EL NOMBRE DE LA REFERENCIA LOCAL QUE ES 'txtTagInput'
    @ViewChild('txtTagInput')

    //La propiedad 'tagInput' ES LA REFERENCIA DIRECTA DEL 'INPUT' QUE SE ENCUENTRA EN NUESTRO 'TEMPLATE' DE LA PARTE SUPERIOR. Por lo cual este 'tagInput' VA A SER DE TIPO 'ElementRef' Y DENTRO DE LOS '<>' DEBEMOS DE ESPECIFICAR EL TIPO DE ELEMENTO HTML AL QUE DESEAMOS HACER REFERENCIA, YA QUE PUEDE SER UN span, button,form,etc. PERO EN ESTE CASO, SERÁ UN 'INPUT' POR LO CUAL COLOCAMOS EL 'HTMLInputElement'
    //!NOTA 2: La propiedad 'tagInput' AL SER DECLARADA PUEDE SER NULO Y NOS ARROJA UN ERROR YA QUE PUEDE PASAR QUE TENGAMOS LA REFERENCIA DIRECTA PERO EL ELEMENTO O ETIQUETA HTML NI SI QUIERA ESTE CONSTRUIDO. POR LO TANTO, PARA SOLUCIONARLO LE COLOCAMOS EL SIMBOLO '!' EL CUAL SIGNIFICA 'NOT NULL OPERATOR', ES DECIR, QUE SIEMPRE SE LE PASARÁ UN VALOR Y NUNCA SERÁ NULO
    //?EN SINTESIS, LA EXCLAMACIÓN '!' AL FINAL DEL 'tagInput' se utiliza para indicar que se sabe que esta propiedad puede ser nula o indefinida en algún momento, pero que se promete que siempre tendrá un valor cuando se la utilice en el código.
    public tagInput!: ElementRef<HTMLInputElement>

    //!PARA UTILIZAR UN SERVICIO, PRIMERO HAY QUE INYECTARLO. Y PARA ELLO DEBEMOS REALIZARLO EN EL PARAMETRO DEL CONSTRUCTOR. 
    constructor(private gifsServices: GifsService ){

    }

    //*ESTE METODO SIRVE CUANDO NO SE UTILIZA EL VIEW CHILD
    // searchTag(newTag:String){
    //     console.log(newTag)
    // }

    //*CON VIEW CHILD
    //EN ESTE METODO YA NO ES NECESARIO PASARLE UN ARGUMENTO DE TIPO STRING PORQUE YA LO TENEMOS EN LA PROPIEDAD 'tagInput'
    searchTag(){
        //CREAMOS UNA CONSTANTE 'newTag' AL CUAL LE VAMOS A ASIGNAR EL VALOR QUE SE OBTIENE EN EL 'tagInput'. 
        //*NOTA: PARA ACCEDER A LAS MULTIPLES PROPIEDADES O METODOS DEL 'tagInput' (ELEMENTO DEL DOM ENLAZADO POR EL 'txtTagInput') UTILIZAREMOS SU PROPIEDAD 'nativeElement'.
        const newTag = this.tagInput.nativeElement.value
        // console.log(newTag);
        this.gifsServices.BuscadorTag(newTag);
        this.tagInput.nativeElement.value = '';
    }
}