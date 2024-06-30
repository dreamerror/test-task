import { Injectable } from '@nestjs/common';

@Injectable()
export class JsonRpcService {
  generateRequestBody(method: string, params: any[]): any {
    return {
      jsonrpc: '2.0',
      method,
      params,
      id: new Date().getTime()
    };
  }
}