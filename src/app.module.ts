import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { HttpService } from './http/http.service';
import { HttpModule } from './http/http.module';
import { DogsModule } from './dogs/dogs.module';
import { TigerService } from './tiger/tiger.service';
import { TigerModule } from './tiger/tiger.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CatsModule, HttpModule, DogsModule, TigerModule, DatabaseModule],
  controllers: [AppController, CatsController],
  providers: [AppService, HttpService, TigerService],
})
export class AppModule {}
