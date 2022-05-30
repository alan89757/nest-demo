import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';
import { JoiValidationPipe } from './pipe/joi-validation.pipe';

@Controller('/app')
export class AppController {
  constructor() {
    // console.log(111);
  }
  @Get(':id')
  getInfo(@Param('id', JoiValidationPipe) id: number) {
    console.log(id);
    return 'hello world !';
  }
  @Get()
  getHello(): object {
    return {
      a: 1,
      b: 2,
    };
  }
  @Post()
  getForm() {
    return {
      c: 3,
      d: 4,
    };
  }
}
