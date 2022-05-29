import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { LionController } from './lion.controller';
import { LionService } from './lion.service';
import { JoiValidationPipe } from '../pipe/joi-validation.pipe';

@Module({
  controllers: [LionController],
  providers: [LionService],
})
export class LionModule {}
