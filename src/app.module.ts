import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { HttpService } from './http/http.service';
import { HttpModule } from './http/http.module';
import { CatsService } from './cats/cats.service';
import { DogModule } from './dog/dog.module';
import { DogsModule } from './dogs/dogs.module';
import { TigerService } from './tiger/tiger.service';
import { TigerModule } from './tiger/tiger.module';
import { DatabaseModule } from './database/database.module';
import { LoggerMiddleware } from './common/logger.middleware';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { HttpExceptionFilter } from './exceptions/http-exception.filter';
import { ValidationPipe } from './validate/validate.pipe';
import { JoiValidationPipe } from './pipe/joi-validation.pipe';
import { LionModule } from './lion/lion.module';

@Module({
  imports: [LionModule],
  controllers: [AppController, CatsController],
  providers: [
    AppService,
    HttpService,
    TigerService,
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
    // {
    //   provide: APP_PIPE,
    //   useClass: ValidationPipe,
    // },
    // {
    //   provide: APP_PIPE,
    //   useClass: JoiValidationPipe,
    // },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, LoggerMiddleware)
      .exclude(
        { path: 'cats', method: RequestMethod.GET },
        { path: 'cats', method: RequestMethod.POST },
        'cats/(.*)',
      )
      .forRoutes(CatsController);
  }
}
