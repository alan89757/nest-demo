import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  HttpStatus,
  Post,
  Res,
  Response,
  UseFilters,
} from '@nestjs/common';
import { of, Observable } from 'rxjs';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';
import { Cat } from './interface/cat.interface';
import { HttpService } from '../http/http.service';
import { HttpExceptionFilter } from 'src/exceptions/http-exception.filter';
// import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  // @UseFilters(new HttpExceptionFilter())
  @UseFilters(HttpExceptionFilter)
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(555);
    throw new ForbiddenException();
  }
  // constructor(private httpService: HttpService) {
  //   console.log(111);
  // }
  // @Get()
  // findAll() {
  //   // console.log(this.httpService);
  //   // console.log(this.httpService);
  //   return 'all cats';
  // }
  // @Post()
  // async create(@Body() createCatDto: CreateCatDto) {
  //   this.catService.create(createCatDto);
  // }
  // @Get()
  // async findAll(): Promise<Cat[]> {
  //   return this.catService.findAll();
  // }
  // @Get()
  // findAll() {
  //   return 'return all cats';
  // }
  // @Post()
  // create(@Res() res: Response) {
  //   // res.status(HttpStatus.CREATED).send();
  // }
  // @Get()
  // findAll(@Res() res: Response) {
  //   console.log(HttpStatus.FORBIDDEN);
  //   return 'hello world';
  //   // res.status(HttpStatus.Ok).join([]);
  // }
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
