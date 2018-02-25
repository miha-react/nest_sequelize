import { Module, RequestMethod } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { HommyController } from './hommy.controller';
import { HommyService} from './hommy.service';
import { hommiesProvider } from './hommy.provider';

@Module({
    modules: [DatabaseModule],
    controllers: [HommyController],
    components: [
        HommyService,
        hommiesProvider,
    ],
})

export class HommyModule{}