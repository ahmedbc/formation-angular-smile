export class Personne {
    id: number;
    name: string;
    profile_path: string;
    biography: string;
    birthday: string;
    deathday: string;
    place_of_birth: string;
    get profile() {
        return `/api/${this.profile_path}`;
    }
}
