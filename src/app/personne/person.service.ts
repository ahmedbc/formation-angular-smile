import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Credits} from '../personne/credits';
import {Personne} from './personne';
import {plainToClass} from 'class-transformer';
import {Movie} from '../movie/movie';
@Injectable({providedIn: 'root'})
export class PersonService {
    constructor(private http: HttpClient) {
    }
    public get(id: number): Observable<Personne> {
        return this.http.get(`api/person/${id}`)
            .pipe(
                map((json: Personne) => plainToClass(Personne, json))
            );
    }
    public movies(id: number): Observable<Array<Movie>> {
        return this.http.get(`api/discover/movie?with_cast=${id}`)
            .pipe(
                map((json: any) => json.results),
                map((json) => plainToClass(Movie, json))
            );
    }
}
