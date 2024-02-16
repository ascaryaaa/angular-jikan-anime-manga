import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { MangaListComponent } from './manga-list/manga-list.component';



@NgModule({
  declarations: [
    MangaListComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class MangaModule { }
