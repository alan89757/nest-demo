import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
} from '@nestjs/common';
import { ObjectSchema } from 'joi';
import { CreateLionDto } from './create-lion.dto';
import { LionService } from './lion.service';
import { JoiValidationPipe } from '../pipe/joi-validation.pipe';

@Controller('lion')
export class LionController {
  constructor() {
    // console.log(222);
  }
  @Get('/pipe-demo/:id')
  @UsePipes(JoiValidationPipe)
  getLion(@Param() createDto: JoiValidationPipe) {
    console.log(createDto);
    return createDto;
  }
  // @UsePipes(JoiValidationPipe)
  @Post()
  async create(@Body() createLionDto: CreateLionDto) {
    console.log(createLionDto);
    return { id: 100 };
  }
}
