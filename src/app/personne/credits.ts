
import {Cast} from './Cast';
import {Type} from 'class-transformer';
import {Crew} from './Crew';

export class Credits {
    @Type(() => Cast) cast: Cast[];
    @Type(() => Crew) crew: Crew[];
}
