import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient } from 'redis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client;

  constructor(private configService: ConfigService) {
    this.client = createClient({
      database: this.configService.get('REDIS_DB'),
      password: this.configService.get('REDIS_PASSWORD'),
      url: `redis://${this.configService.get('REDIS_HOST')}:${this.configService.get('REDIS_PORT')}`,
    });
  }

  async onModuleInit() {
    await this.client.connect();
  }

  async onModuleDestroy() {
    await this.client.disconnect();
  }

  async ping(): Promise<string> {
    return this.client.ping();
  }
}
