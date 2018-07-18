import { Component, OnInit, Input } from '@angular/core';
import {Movie} from '../movie';
@Component({
  selector: 'imdb-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.css']
})
export class MoviePosterComponent implements OnInit {
    @Input()
    public movie: Movie;
    constructor() { }

    ngOnInit() {
    }

}
