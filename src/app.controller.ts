import { Controller, Get, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("block/:height")
  @UsePipes(new ValidationPipe({ transform: true }))
  getBlock(@Param('height') height: string): any {
    return this.appService.getBlock(height);
  }

  @Get("transaction/:hash")
  @UsePipes(new ValidationPipe({ transform: true }))
  getTransaction(@Param('hash') hash: string): any {
    return this.appService.getTransaction(hash);
  }
}
