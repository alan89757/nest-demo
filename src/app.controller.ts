import { Controller, Get, HostParam } from '@nestjs/common';
import { AppService } from './app.service';

@Controller(':account.localhost')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getInfo(@HostParam('account') account: string) {
    // return '123';
    console.log(account);
    return account;
  }
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
