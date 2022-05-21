import { Inject, Injectable, Optional } from '@nestjs/common';

@Injectable()
export class HttpService {
  // constructor(
  //   @Optional() @Inject('HTTP_OPTIONs') private readonly httpClient: T,
  // ) {
  //   console.log(this.httpClient);
  // }
  // @Inject('HTTP_OPTIONS')
  // private readonly httpClient: T;
  constructor() {
    // console.log(this.httpClient);
  }
}
