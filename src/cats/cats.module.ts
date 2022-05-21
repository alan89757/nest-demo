import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpService } from '../http/http.service';
import { CatsController } from './cats.controller';
import { HttpModule } from 'src/http/http.module';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [HttpService],
  exports: [],
})
export class CatsModule {}
