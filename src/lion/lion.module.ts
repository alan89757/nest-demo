import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { LionController } from './lion.controller';
import { LionService } from './lion.service';
import { JoiValidationPipe } from '../pipe/joi-validation.pipe';
import { ObjectSchema } from 'joi';

@Module({
  imports: [JoiValidationPipe],
  controllers: [LionController],
  providers: [LionService, JoiValidationPipe],
  exports: [JoiValidationPipe],
})
export class LionModule {}
