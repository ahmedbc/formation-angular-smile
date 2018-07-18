export class Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    budget: number;
    release_date: Date;
    vote_average: number;
    get poster() {
        return `/api/${this.poster_path}`;
    }
}
