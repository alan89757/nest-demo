import { Controller } from '@nestjs/common';
import { TigerService } from '../tiger/tiger.service';

@Controller('dogs')
export class DogsController {
  constructor(private readonly tigerService: TigerService) {

  }
}
