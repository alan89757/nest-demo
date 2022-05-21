import { Module } from '@nestjs/common';
import { CatsModule } from 'src/cats/cats.module';
import { DatabaseModule } from 'src/database/database.module';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [CatsModule, DatabaseModule.forRoot([User])],
  controllers: [DogsController],
  providers: [DogsService]
})
export class DogsModule {}
