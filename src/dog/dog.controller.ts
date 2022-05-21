import { Controller } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';
import { HttpService } from 'src/http/http.service';

@Controller('dog')
export class DogController {
  constructor(
    private catsService: CatsService,
    private httpService: HttpService,
  ) {
    console.log(333);
  }
}
