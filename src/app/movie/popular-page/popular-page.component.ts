import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import {MovieService} from '../movie.service';

@Component({
  selector: 'imdb-popular-page',
  templateUrl: './popular-page.component.html',
  styleUrls: ['./popular-page.component.css']
})
export class PopularPageComponent implements OnInit {
    movies: Movie[];
    constructor(private movieService: MovieService) { }

    ngOnInit() {
        /*this.movies = [
            {id: 1, title: 'Pulp Fiction'},
            {id: 2, title: 'Fight Club'},
            {id: 3, title: 'Forrest Gump'}
        ];*/

        this.movieService.popular().subscribe((movies: Array<Movie>) => {
            this.movies = movies;
        });
    }

}
