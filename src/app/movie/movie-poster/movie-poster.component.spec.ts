import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePosterComponent } from './movie-poster.component';
import {Movie} from '../movie';
import {By} from '@angular/platform-browser';

describe('MoviePosterComponent', () => {
  let component: MoviePosterComponent;
  let fixture: ComponentFixture<MoviePosterComponent>;
    let movie: Movie;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePosterComponent);
    component = fixture.componentInstance;
      movie = new Movie();
      movie.id = 42;
      movie.title = 'This is the movie title';
      movie.poster_path = 'poster_path.jpg';
      component.movie = movie;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    it('should display movie poster', () => {
        const image = fixture.debugElement.query(By.css('img')).nativeElement;
        const textContent = fixture.debugElement.nativeElement.textContent;
        expect(image.src).toContain(movie.poster);
        expect(textContent).toContain(movie.title);
    });
});
