import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PopularPageComponent } from './movie/popular-page/popular-page.component';
import {MovieService} from './movie/movie.service';
import {httpFactory} from '@angular/http/src/http_module';
import {HttpClient} from '@angular/common/http';
import { MoviePosterComponent } from './movie/movie-poster/movie-poster.component';
import { MoviePageComponent } from './movie/movie-page/movie-page.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { MovieCreditsComponent } from './movie/movie-credits/movie-credits.component';
import { PersonnePageComponent } from './personne/person-page/person-page.component';
import { PersonDetailsComponent } from './personne/person-details/person-details.component';
import { PersonPosterComponent } from './personne/person-poster/person-poster.component';
import { MenuComponent } from './common/menu/menu.component';


const appRoutes: Routes = [
    {
        path: 'movie',
        children: [
            {path: 'popular', component: PopularPageComponent},
             {path: ':id', component: MoviePageComponent}
        ]
    },
    {
        path: 'person',
        children: [
{path: ':id', component: PersonnePageComponent}
        ]
    },
    {path: '**', redirectTo: 'movie/popular', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    PopularPageComponent,
    MoviePosterComponent,
    MoviePageComponent,
    MovieDetailComponent,
    MovieCreditsComponent,
      PersonnePageComponent,
      PersonDetailsComponent,
      PersonPosterComponent,
      MenuComponent
  ],
  imports: [
      HttpClientModule,
      BrowserModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [
      // MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
