import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeService } from './anime.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AnimeListComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    HttpClientModule,
  ],
  providers: [
    AnimeService
  ]
})
export class AnimeModule { }
