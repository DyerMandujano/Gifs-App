import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';


//EN ESTE MODULO SE ENCONTRARAN LOS COMPONENTES COMPARTIDOS QUE HAY EN LA PAGINA QUE SERIAN POR EJEMPLO: LOS NAVBARS, SIDEBARS, FOOTER, ETC.

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  //EXPORTAMOS LOS COMPONENTES PARA QUE ESTOS PUEDAN SER UTILIZADOS EN EL MODULO PRINCIPAL QUE ES 'app.module.ts'
  exports:[
    SidebarComponent
  ]
})
export class SharedModule { }
