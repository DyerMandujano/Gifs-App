import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';


//EN ESTE MODULO SE ENCONTRARAN LOS COMPONENTES COMPARTIDOS QUE HAY EN LA PAGINA QUE SERIAN POR EJEMPLO: LOS NAVBARS, SIDEBARS, FOOTER, ETC.

@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  //EXPORTAMOS LOS COMPONENTES PARA QUE ESTOS PUEDAN SER UTILIZADOS EN EL MODULO PRINCIPAL QUE ES 'app.module.ts'
  exports:[
    SidebarComponent,
    LazyImageComponent
  ]
})
export class SharedModule { }
