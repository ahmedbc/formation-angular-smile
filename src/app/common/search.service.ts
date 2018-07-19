import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {plainToClass} from 'class-transformer';
import {SearchResults} from './menu/autocomplete/search-results';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

    constructor(private http: HttpClient) {
    }
    public getSearchResults(query: string): Observable<Array<SearchResults>> {
        return this.http.get(`api/search/multi?query=${query}`)
            .pipe(
                map((json: any) => json.results),
                map((json) => plainToClass(SearchResults, json))
            );
    }
}
