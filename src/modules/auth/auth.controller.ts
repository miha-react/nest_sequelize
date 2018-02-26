'use strict';

import { Controller, Post, HttpStatus, Request, Response } from '@nestjs/common';
import { MessageCodeError } from '../common/index';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    public async login(@Request() req, @Response() res) {
        try{
            const body = req.body;
            console.log(body)
            if (!body) throw new MessageCodeError('auth:login:missingInformation');
            if (!body.email) throw new MessageCodeError('auth:login:missingEmail');
            if (!body.password) throw new MessageCodeError('auth:login:missingPassword');

            const token = await this.authService.sign(body);
            console.log('you got this token--->>>>', token);
            res.status(HttpStatus.ACCEPTED).json('Bearer ' + token);
        }
        catch (err){
            console.log(err);
        }
    }
}
