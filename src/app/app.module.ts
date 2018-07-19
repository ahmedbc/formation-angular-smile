import {BrowserModule, Title} from '@angular/platform-browser';
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
import { PersonDetailsComponent } from './personne/person-details/person-details.component';
import { PersonPosterComponent } from './personne/person-poster/person-poster.component';
import { MenuComponent } from './common/menu/menu.component';
import { ScrollComponent } from './common/scroll/scroll.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AutocompleteComponent } from './common/menu/autocomplete/autocomplete.component';
import {SearchService} from './common/search.service';
import {PersonService} from './personne/person.service';
import {PersonPageComponent} from './personne/person-page/person-page.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';


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
{path: ':id', component: PersonPageComponent}
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
        PersonPageComponent,
        PersonPosterComponent,
        PersonDetailsComponent,
        MenuComponent,
        ScrollComponent,
        AutocompleteComponent,
        ModelDrivenFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [Title],
    bootstrap: [AppComponent]
})
export class AppModule { }
