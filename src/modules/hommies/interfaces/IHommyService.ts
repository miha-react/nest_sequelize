import { Hommy } from '../hommy.entity';
import { IHommy } from './IHommy';

export interface IHommyService {
    findAll(): Promise<Array<Hommy>>;
    findOne(options: Object): Promise<Hommy | null>;
    create(hommy: IHommy): Promise<Hommy>;
}