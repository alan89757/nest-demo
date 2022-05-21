import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Request...middlewares...');
    next();
  }
}

export function logger(req, res, next) {
  console.log('request...');
  next();
}
