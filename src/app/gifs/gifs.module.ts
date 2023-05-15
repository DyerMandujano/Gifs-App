import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent,
    //!NOTA: NO IMPORTAMOS EL 'SearchBoxComponent' YA QUE NO LO VAMOS A UTILIZAR FUERA DEL COMPONENTE DE 'HomePageComponent'
  ]
})
export class GifsModule { }
