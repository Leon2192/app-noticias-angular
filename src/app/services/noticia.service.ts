import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoticiaService {
  constructor(private http: HttpClient) {}

  getNoticias(parametros: any): Observable<any> {
    const url =
      'https://newsapi.org/v2/top-headlines?country=' +
      parametros.pais +
      '&category=' +
      parametros.categoria +
      '&apiKey=16b12d5688f54ac49c18ce85eae210be';

    return this.http.get(url);
  }
}
