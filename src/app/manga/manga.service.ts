import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manga, GetMangaDetailResponse, GetMangaResponse } from './manga';
import { mangaDetailEndpoint,  topMangaListEndpoint } from '../config/api';


@Injectable({
  providedIn: 'root'
})
export class MangaService {

  constructor(private httpClient: HttpClient) { }
  getTopMangaList(): Observable<Array<Manga>> {
    return new Observable(observer => {
      this.httpClient
      .get<GetMangaResponse>(topMangaListEndpoint)
      .subscribe(respone => {
        console.log({respone});
        observer.next(respone.data);
        observer.complete();
      })
   })
  }
  getMangaDetail(id: number): Observable<Manga> {
    return new Observable(observer => {
      this.httpClient
      .get<GetMangaDetailResponse>(mangaDetailEndpoint + id)
      .subscribe(respone => {
        console.log({respone});
        observer.next(respone.data);
        observer.complete();
      })
   })
  }
}
