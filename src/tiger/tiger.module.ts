import { Global, Module } from '@nestjs/common';
import { TigerService } from "./tiger.service";
import { TigerController } from './tiger.controller';

@Global()
@Module({
  controllers: [TigerController],
  providers: [TigerService],
  exports: [TigerService]
})
export class TigerModule {}
