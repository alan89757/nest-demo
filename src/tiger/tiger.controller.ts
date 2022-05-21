import { Controller, HttpException, HttpStatus, Get } from '@nestjs/common';
import { ForbiddenException } from "../exceptions/forbidden.exception";

@Controller('tiger')
export class TigerController {
  @Get()
  async findAll() {
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    // throw new HttpException({
    //   statue: HttpStatus.FORBIDDEN,
    //   error: 'this is a custom message'
    // }, HttpStatus.FORBIDDEN);
    throw new ForbiddenException();
  }
}
