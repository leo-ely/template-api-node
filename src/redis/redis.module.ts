import { RedisService } from './redis.service';
import { Module } from '@nestjs/common';

@Module({
  exports: [RedisService],
  providers: [RedisService],
})
export class RedisModule {}
