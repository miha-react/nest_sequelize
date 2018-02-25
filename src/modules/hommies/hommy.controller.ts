import { Controller, Get, Post, HttpStatus, Request, Response } from '@nestjs/common';
import { HommyService } from './hommy.service';

@Controller()
export class HommyController {
    constructor(private readonly hommiesService: HommyService) {}

        @Get('hommies')
        public async index(@Response() res) {
            const hommies = await this.hommiesService.findAll();
            return res.status(HttpStatus.OK).json(hommies);
        }

        @Post('hommies')
        public async create(@Request() req, @Response() res){
            const body = req.body;
            if (!body || (body && Object.keys(body).length === 0)) throw new Error('No Data');

            await this.hommiesService.create(req.body);
            return res.status(HttpStatus.CREATED).send();
        }
}
