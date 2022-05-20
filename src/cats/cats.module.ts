import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpService } from '../http/http.service';

@Module({
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}
