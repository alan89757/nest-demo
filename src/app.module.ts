import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { HttpService } from './http/http.service';
import { HttpModule } from './http/http.module';

@Module({
  imports: [CatsModule, HttpModule],
  controllers: [AppController, CatsController],
  providers: [AppService, HttpService],
})
export class AppModule {}
