import { Inject, Injectable, Optional } from '@nestjs/common';

@Injectable()
export class HttpService {
  constructor() {
    // console.log(this.httpClient);
  }
  // @Inject('HTTP_OPTIONS')
  // private readonly httpClient: T;
  // constructor() {
  //   console.log(this.httpClient);
  // }
}
