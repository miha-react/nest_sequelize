'use strict';

import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { HommyModule} from './hommies/hommy.module';

@Module({
    modules: [
        UsersModule,
        AuthModule,
        HommyModule,
    ],
})
export class ApplicationModule { }
