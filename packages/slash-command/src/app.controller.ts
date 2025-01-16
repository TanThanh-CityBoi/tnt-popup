import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/')
  public sayHello(@Body() body) {
    return this.appService.sayHello(body);
  }
}
