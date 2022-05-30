import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpService } from './http/http.service';
import Joi from 'joi';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, HttpService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    return;
  }
}
