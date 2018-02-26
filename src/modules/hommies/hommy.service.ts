import { Component, Inject } from '@nestjs/common';
import { Model } from 'sequelize-typescript';
import { IHommy } from './interfaces/IHommy';
import { IHommyService } from './interfaces/IHommyService';
import { Hommy } from './hommy.entity';

@Component()
export class HommyService implements IHommyService{
    constructor(@Inject('HommiesRepository') private readonly hommiesRepository: typeof Model,
                @Inject('SequelizeInstance') private readonly sequelizeInstance){ }

        public async findAll(): Promise<Array<Hommy>>{
            return await this.hommiesRepository.findAll<Hommy>();
        }

        public async findOne(options: Object): Promise<Hommy | null>{
            return await this.hommiesRepository.findOne<Hommy>(options);
        }

        public async findById(id: number): Promise<Hommy | null> {
            return await this.hommiesRepository.findById<Hommy>(id);
    }

        public async create(hommy: IHommy): Promise<Hommy>{
            return await this.sequelizeInstance.transaction(async transaction => {
                return await this.hommiesRepository.create<Hommy>(hommy, {
                    returning: true,
                    transaction,
                });
            });
        }

        private _assign(hommy: IHommy, newValue: IHommy): Hommy {
            for (const key of Object.keys(hommy)){
                if (hommy[key] !== newValue[key]) {
                    hommy[key] = newValue[key];
                }
            }
            return hommy as Hommy;
        }
}