import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { JsonRpcService } from './rpc.service';
import { map } from 'rxjs/operators';
import { BlockDto } from './dto/block.dto';
import { lastValueFrom } from 'rxjs';
import { RPC_ENDPOINT } from './constants';

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
    private readonly jsonRpcService: JsonRpcService
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getBlock(height: string) : Promise<BlockDto> {
    const method = "eth_getBlockByNumber";
    const requestBody = this.jsonRpcService.generateRequestBody(method, [height, true]);

    const observable = this.httpService.post(RPC_ENDPOINT, requestBody).pipe(
      map(response => {
        const data : BlockDto = response.data.result;

        return data;
      })
    );

    return await lastValueFrom(observable);
  }

  async getTransaction(hash: string) : Promise<any> {
    const method = "eth_getTransactionByHash";
    const requestBody = this.jsonRpcService.generateRequestBody(method, [hash]);

    const observable = this.httpService.post(RPC_ENDPOINT, requestBody).pipe(
      map(response => {
        if (response.data?.result) {
          return response.data.result;
        } else {
          return `Error: ${response.data.error.message}`
        }
      })
    );

    return await lastValueFrom(observable);
  }
}
