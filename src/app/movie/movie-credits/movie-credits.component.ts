import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../movie';
import {Credits} from '../../personne/credits';

@Component({
  selector: 'imdb-movie-credits',
  templateUrl: './movie-credits.component.html',
  styleUrls: ['./movie-credits.component.css']
})
export class MovieCreditsComponent implements OnInit {
    @Input()
    public credits: Credits;
  constructor() { }

  ngOnInit() {
  }

}
