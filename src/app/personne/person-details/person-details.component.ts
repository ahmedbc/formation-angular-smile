import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../personne';

@Component({
  selector: 'imdb-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
    @Input()
    person: Personne;
  constructor() { }

  ngOnInit() {
  }

}
