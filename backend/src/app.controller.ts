import { Controller, Get, Res} from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import * as path from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response): void {
    const htmlPath = path.join(__dirname, '..', 'public', 'index.html');
    res.sendFile(htmlPath);
  }
}
