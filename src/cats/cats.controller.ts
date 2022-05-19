import { Body, Controller, Get, HttpStatus, Post, Res, Response } from '@nestjs/common';
import { of, Observable } from 'rxjs';
import { CreateCatDto } from './create-cat.dto';
// import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Res() res: Response) {
    // res.status(HttpStatus.CREATED).send();
  }
  @Get()
  findAll(@Res() res: Response) {
    console.log(HttpStatus.FORBIDDEN);
    return 'hello world';
    // res.status(HttpStatus.Ok).join([]);
  }
  // @Post()
  // async create(@Body() createCatDto: CreateCatDto) {
  //   return 'cat dto';
  // }
  // @Post()
  // create(): string {
  //   console.log(222);
  //   return 'this action add new cat';
  // }
  // @Get()
  // findAll(): Observable<any[]> {
  //   return of([]);
  // }

  // @Get()
  // async findAll(): Promise<any[]> {
  //   return [];
  // }

  // @Get()
  // async getInfo(account: string) {
  //   return 'hello cats';
  // }
  // @Get(':id')
  // @Header('Cache-Control', 'none')
  // // @Redirect('https://baidu.com', 301)
  // findAll(@Param('id') id): string {
  //   console.log(id);
  //   // return { url: 'http://sohu.com' };
  //   return 'this action return all cats';
  // }
}
