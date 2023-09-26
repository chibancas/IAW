import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'cbs!';
  }

  getAll():string{
    return "listado";
  }
}
