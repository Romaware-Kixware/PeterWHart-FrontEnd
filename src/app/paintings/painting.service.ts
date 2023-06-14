import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Painting } from './model/painting.model';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaintingService {
  paintings!: Observable<Painting[]>

  constructor(private http: HttpClient) { }

  getPaintings(paramsObject?: any): Observable<Painting[]> {
    this.paintings = this.http.get<Painting[]>(environment.apiUrl, {params: paramsObject});
    return this.paintings;
  }

}
