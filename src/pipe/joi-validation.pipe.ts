import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { HttpService } from '../http/http.service';
import { ObjectSchema } from 'joi';
import { LionService } from '../lion/lion.service';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor() {}
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(111, value);
    // const { error } = this.schema.validate(value);
    return value;
  }
}
