import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../search.service';
import {Movie} from '../../../movie/movie';
import {SearchResults} from './search-results';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'imdb-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

    results: SearchResults[];
    query: string;
    constructor(private searchService: SearchService) {}
    ngOnInit() {
    }
    onKeyUp(event: KeyboardEvent) {
        const keyCode = event.keyCode;

        console.log(this.query);
        this.searchService.getSearchResults(this.query).subscribe( results => {
            this.results = results;
        });
        console.log(this.results);
    }

}
