import { Component, OnInit } from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, Params} from '@angular/router';
import {MovieService} from '../movie.service';
import {Movie} from '../movie';
import {Credits} from '../../personne/credits';
import {zip} from 'rxjs';
@Component({
  selector: 'imdb-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
    movie: Movie;
    credits: Credits;
    constructor(private route: ActivatedRoute, private movieService: MovieService) {}

     ngOnInit() {
            this.route.params.pipe(
                switchMap((params: Params) => {
                    const movie$ = this.movieService.get(params.id);
                    const credits$ = this.movieService.credits(params.id);
                    return zip(movie$, credits$);

                })
            ).subscribe( ([movie, credits ]: [Movie, Credits ]) => {
                this.movie = movie;
                this.credits = credits;
            });
     }

}
