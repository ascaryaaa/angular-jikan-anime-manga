import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrl: './anime-list.component.css'
})
export class AnimeListComponent {
  animes$: Observable<Array<Anime>>;

  constructor(private service: AnimeService) {
    this.animes$ = this.service.getTopAnimeList();
  }
}
