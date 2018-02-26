import {Table, Column, Model, DataType, BeforeCreate} from 'sequelize-typescript';
import { IDefineOptions } from 'sequelize-typescript/lib/interfaces/IDefineOptions';
import * as crypto from 'crypto';

const tableOptions: IDefineOptions = { timestamp: true, tableName: 'hommies' } as IDefineOptions;

@Table(tableOptions)
export class Hommy extends Model<Hommy>{
    @Column({
        type: DataType.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    public id: number;

    @Column({
        type: DataType.CHAR(30),
        allowNull: false,
    })
    public firstName: string;

    @Column({
        type: DataType.CHAR(50),
        allowNull: false,
        validate: {
            isEmail: true,
            isUnique: async (value: string, next: Function): Promise<any> => {
                const isExist = await Hommy.findOne({where: { email: value }});
                if (isExist) {
                    const error = 'Already exists';
                    next(error);
                }
                next();
            },
        },
    })
    public email: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    public password: string;

    @BeforeCreate
    public static async hashPassword(hommy: Hommy, options: any) {
        try{
            if (!options.transaction){
               throw new Error('Missing transaction.');
            }
            hommy.password = crypto.createHmac('sha256', hommy.password).digest('hex');
        }catch (err) {
            console.log(err);
        }
    }
}