import { Injectable } from '@nestjs/common';
import { HttpService } from '../http/http.service';

@Injectable()
export class DogsService {
  constructor(private readonly httpService: HttpService) {

  }
}
