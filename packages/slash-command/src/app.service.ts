import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sayHello(data: any) {
    return {
      data,
      message: 'Hellooo',
    };
  }
}
