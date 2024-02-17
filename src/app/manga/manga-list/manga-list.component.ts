import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Manga } from '../manga';
import { MangaService } from '../manga.service';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrl: './manga-list.component.css'
})
export class MangaListComponent {
  mangas$: Observable<Array<Manga>>;

  constructor(private service: MangaService) {
    this.mangas$ = this.service.getTopMangaList();
  }
}
