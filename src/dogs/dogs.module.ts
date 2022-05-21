import { Module } from '@nestjs/common';
import { CatsModule } from 'src/cats/cats.module';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';

@Module({
  imports: [CatsModule],
  controllers: [DogsController],
  providers: [DogsService]
})
export class DogsModule {}
