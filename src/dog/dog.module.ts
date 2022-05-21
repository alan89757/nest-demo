import { Module } from '@nestjs/common';
import { CatsModule } from 'src/cats/cats.module';
import { CatsService } from 'src/cats/cats.service';
import { HttpService } from 'src/http/http.service';
import { DogController } from './dog.controller';

@Module({
  imports: [CatsModule],
  controllers: [DogController],
  providers: [CatsService, HttpService],
})
export class DogModule {}
