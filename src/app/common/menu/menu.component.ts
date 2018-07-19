import { Component, OnInit } from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, Params} from '@angular/router';
import {Movie} from '../../movie/movie';
import {Credits} from '../../personne/credits';
import {MovieService} from '../../movie/movie.service';
import {zip} from 'rxjs';
import {SearchService} from '../search.service';

@Component({
  selector: 'imdb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    constructor() {}
    ngOnInit() {
    }
}


