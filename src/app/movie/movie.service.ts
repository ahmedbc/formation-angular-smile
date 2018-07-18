import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Movie} from './movie';
import {Credits} from '../personne/credits';
import {plainToClass} from 'class-transformer';
@Injectable({providedIn: 'root'})
export class MovieService {
    constructor(private http: HttpClient) {
    }
    public popular(): Observable<Array<Movie>> {
        return this.http.get(`api/movie/popular`)
            .pipe(
                map((json: any) => json.results),
                map((json) => plainToClass(Movie, json))
            );
    }
    public get(id: number): Observable<Movie> {
        return this.http.get(`api/movie/${id}`)
            .pipe(
                map((json: Movie) => plainToClass(Movie, json))
            );
    }
    public credits(id: number): Observable<Credits> {
        return this.http.get(`api/movie/${id}/credits`)
            .pipe(
                map((json: Credits) => plainToClass(Credits, json))
            );
    }
}
