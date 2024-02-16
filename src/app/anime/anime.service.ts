import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime, GetAnimeResponse } from './anime';
import { HttpClient } from '@angular/common/http';
import { topAnimeListEndpoint } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  
  constructor(private httpClient: HttpClient) { }

  getTopAnimeList(): Observable<Array<Anime>> {
    return new Observable(observer => {
      this.httpClient
      .get<GetAnimeResponse>(topAnimeListEndpoint)
      .subscribe(respone => {
        console.log({respone});
        observer.next(respone.data);
        observer.complete();
      })
   })
  }
}
