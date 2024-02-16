import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime, GetAnimeDetailResponse, GetAnimeResponse } from './anime';
import { HttpClient } from '@angular/common/http';
import { animeDetailEndpoint,  topAnimeListEndpoint } from '../config/api';

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
  getAnimeDetail(id: number): Observable<Anime> {
    return new Observable(observer => {
      this.httpClient
      .get<GetAnimeDetailResponse>(animeDetailEndpoint + id)
      .subscribe(respone => {
        console.log({respone});
        observer.next(respone.data);
        observer.complete();
      })
   })
  }
}