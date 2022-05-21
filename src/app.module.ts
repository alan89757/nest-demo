import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { HttpService } from './http/http.service';
import { HttpModule } from './http/http.module';
import { CatsService } from './cats/cats.service';
import { DogModule } from './dog/dog.module';

@Module({
  imports: [CatsModule, DogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
