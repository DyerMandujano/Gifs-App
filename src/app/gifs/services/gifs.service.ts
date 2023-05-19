import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

    //CREAMOS EL ARRAY 'listaGifs'  DE TIPO INTERFACE 'Gif' Y LO INICIALIZAMOS VACIO
    public listaGifs: Gif[] = [];

    //CREAMOS ESTE ARRAY DE TIPO STRING DE MANERA PRIVADA PARA QUE NO PUEDA SER MDOFICADA FUERA DE ESTE SERVICIO
    private _tagsHistory: string[] = [];
    private apikey: string = 'mZLbdnXCPjNDJN8OCG4HU0CaUMiUulNy';
    private serviceUrl: string = 'http://api.giphy.com/v1/gifs';

    constructor(private http:HttpClient){

    }

    //*Y UTILIZAMOS ESTE GETTER PARA EXPONER ES ARRAY '_tagsHistory' SIN NECESIDAD DE QUE SEA MODIFICADO EN OTROS ARCHIVOS Y SOLO PUEDAN OBTENER SU VALOR.
    public get tagsHistory(){
        return this._tagsHistory;
    }
    
    

    organizeHistory(tag:string){
        //*LOS TAGS SE PASAN A MINUSCULA
        tag = tag.toLowerCase();
        //?SI EL TAG NUEVO QUE SE PASO POR PARAMETRO SE ENCUENTRA EN EL ARRAY '_tagsHistory' ENTRA AL 'IF'
        if(this._tagsHistory.includes(tag)){
            //?SE VA A FILTRAR EL ARRAY '_tagsHistory' EN EL CUAL SI EL 'oldtag' ES DIFERENTE AL TAG NUEVO, SEGUIRA EN EL ARRAY. DE LO CONTRARIO SE 'eliminará' EL TAG QUE SE LE PASO POR PARAMETRO Y ARROJARÁ UN NUEVO ARRAY CON TODOS ELEMENTOS MENOS ESE TAG REPETIDO GRACIAS AL FILTER 
            console.log("ANTES DEL FILTER",this._tagsHistory)
            console.log("ARRAY CON FILTER",this._tagsHistory.filter((oldtag) =>  oldtag !== tag))
            this._tagsHistory = this._tagsHistory.filter((oldtag) =>  oldtag !== tag)
            console.log("DESPUES DEL FILTER",this._tagsHistory)
        }

        //*ES POR ELLO, QUE EN ESTA LINEA DE CODIGO, SE INSERTA NUEVAMENTE AL TAG PASADO POR PARAMETRO AL INICIO DEL ARRAY
        this._tagsHistory.unshift(tag);
        console.log("ANTES DE SPLICE",this._tagsHistory)
        //*EL METODO SPLICE NOS VA A PERMITIR ELIMINAR ELEMENTOS DE UN ARRAY.
        //!EN EL PRIMER PARAMETRO COLOCAMOS EL INDICE DESDE DONDE SE VA A EMPEZAR A ELIMINAR
        //!EN EL SEGUNDO PARAMETRO COLOCAMOS LA CANTIDAD DE ELEMENTOS QUE SE VAN A ELIMINAR Y VA A COMENZAR A ELIMINAR LOS DEPENDIENDO DEL INDICE QUE SE LE HA INDICADO EN EL PRIMER PARAMETRO
        //?NOTA 2: EL METODO SPLICE DEVUELVE/RETORNA EL ARRAY ELIMINADO
        //*ES POR ELLO QUE EN ESTA LINEA DE CODIGO SE LE ESTA ASIGNANDO AL ARRAY '_tagsHistory' LOS ELEMENTOS ELIMINADOS GRACIAS AL METODO SPLICE PARA QUE DE ESTA MANERA SIEMPRE NOS DEVUELA LOS 10 ELEMENTOS QUE SE MOSTRARÁN EN PANTALLA
        this._tagsHistory = this._tagsHistory.splice(0,10);
        console.log("DESPUES DE SPLICE",this._tagsHistory)

    }

    //EN ESTE METODO GUARDARÁ CADA TAG QUE SE BUSQUE EN EL ARRAY '_tagsHistory'
    BuscadorTag( tag: string):void{
        if(tag == "") return;
        this.organizeHistory(tag)

        //CREAMOS UNA CONSTANTE 'parametros' PARA QUE LA URL SEA MÁS LEGIBLE Y PERSONALIZABLE AL MOMENTO DE PASARLE LOS RESPECTIVOS PARAMETROS
        const parametros = new HttpParams()
        //?EN EL METODO 'SET' DEBEMOS COLOCARLE COMO PRIMER PARAMETROS, UN NOMBRE CLAVE QUE VA A TENER EL PARAMETRO Y COMO SEGUNDO PARAMETRO, EL VALOR QUE VA A TENER ESE PARAMETRO. 
                    //*.set('nom_clave',nom_variable)
                       .set('api_key', this.apikey)
                       .set('limit', 15)
                       .set('q', tag)

        //REALIZACION DE PETICION HTTP 'GET'
        //?DENTRO DEL PARAMETRO DEL METODO GET COLOCAMOS LA URL EN STRING. SIN EMBARGO, PARA SIMPLIFICAR ESA URL Y NO SE VEA TAN EXTENSA, UTILIZAMOS CONSTANTES O VARIABLES DE ENTORNO
        //*EL METODO 'GET' NOS VA A DEVOLVER UN OBSERVABLE, POR LO CUAL TIENE QUE UTILIZARCE EL METODO 'subscribe' PARA PODER ESCUCHAR LAS EMISIONES QUE EL OBJETO ESTÉ EMITIENDO
        //!NOTA: EN ESTE CASO SOLO QUEREMOS OBTENER LA DATA DE LOS GIFS DE LA INTERFACE 'SearchResponse'. SIN EMBARGO, AL METODO 'GET' LE DEBEMOS DECIR DE QUE TIPO ES PARA QUE NOS DEVUELVE EL OBSERVABLE DE ESE MISMO TIPO, QUE EN ESTE CASO SERÁ LA INTERFACE 'SearchResponse' EL CUAL LO COLOCAREMOS ENTRE '<>'
        this.http.get<SearchResponse>( `${this.serviceUrl}/search?`,{params:parametros}).subscribe(resp =>{
            console.log(`SE HA REALIZADO LA CONSULTA GET DE ${tag} CON EXITO` );
            //AL ARRAY 'listaGifs' SE LE ASIGNARÁ TODOS LOS VALORES OBTENIDOS DE 'resp.data'
            //!NOTA: LA PROPIEDAD 'data' VIENE DE LA INTERFACE GENERAL 'SearchResponse'. ESTA PROPIEDAD 'data' ES UN ARRAY Y ES DE TIPO INTERFACE 'Gifs' POR LO CUAL ES COMPATIBLE CON EL ATRIBUTO 'listaGifs'
            this.listaGifs = resp.data;
            console.log({gifs: this.listaGifs})
            
            
        })
       
    }

    
}