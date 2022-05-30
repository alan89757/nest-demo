import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';
import { CreateCatDto } from 'src/cats/create-cat.dto';
import { JoiValidationPipe } from 'src/cattle.pipe';
import { HttpService } from 'src/http/http.service';

@Controller('dog')
export class DogController {
  constructor() {
    console.log(333);
  }
  @Get()
  // @UsePipes(new JoiValidationPipe(createCatSchema))
  async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    // this.catsService.create(createCatDto);
  }
  // @Get(':/id')
  // findOne(@Param('id', UserByIdPipe) userEntity: UserEntity) {
  //   return userEntity;
  // }
  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id) {
    // return await this.catsService.findOne(id);
  }
}
