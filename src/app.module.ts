import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JsonRpcService } from './rpc.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, JsonRpcService],
})
export class AppModule {}
