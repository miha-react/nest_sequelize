import { Hommy } from './hommy.entity';

export const hommiesProvider = {
    provide: 'HommiesRepository',
    useValue: Hommy,
};