import {Component, Input, OnInit} from '@angular/core';
import {Credits} from '../credits';
import {Personne} from '../personne';
import {switchMap} from 'rxjs/operators';
import {zip} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {Movie} from '../../movie/movie';
import {PersonService} from '../person.service';

@Component({
    selector: 'imdb-person-page',
    templateUrl: './person-page.component.html',
    styleUrls: ['./person-page.component.css']
})
export class PersonPageComponent implements OnInit {
    @Input()
    person: Personne;
    movies: Movie[];
    constructor(private route: ActivatedRoute, private personService: PersonService) {}

    ngOnInit() {
        this.route.params.pipe(
            switchMap((params: Params) => {
                const person$ = this.personService.get(params.id);
                const movies$ = this.personService.movies(params.id);
                return zip(person$, movies$);

            })
        ).subscribe( ([person, movies ]: [Personne, Movie[] ]) => {
            this.person = person;
            this.movies = movies;
        });
    }

}
