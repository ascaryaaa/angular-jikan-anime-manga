import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { AnimeListComponent } from './anime-list/anime-list.component';



@NgModule({
  declarations: [
    AnimeListComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class AnimeModule { }
