import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
// import { HttpService } from '../http/http.service';
import { CatsController } from './cats.controller';
import { HttpModule } from 'src/http/http.module';

@Module({
  imports: [HttpModule],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService, HttpModule],
})
export class CatsModule {}
