import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../personne';

@Component({
  selector: 'imdb-person-poster',
  templateUrl: './person-poster.component.html',
  styleUrls: ['./person-poster.component.css']
})
export class PersonPosterComponent implements OnInit {
    @Input()
    person: Personne;
  constructor() { }

  ngOnInit() {
  }

}
