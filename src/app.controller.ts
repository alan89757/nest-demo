import { Controller, Get, HostParam } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';

@Controller()
export class AppController {
  constructor() {
    // console.log(111);
  }
  @Get()
  getInfo(@HostParam('account') account: string) {
    // return '123';
    // console.log(this.catsService);
    console.log(account);
    return account;
  }
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
