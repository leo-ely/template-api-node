import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule } from '@nestjs/config';
import { MetricsModule } from './metrics/metrics.module';
import { RedisModule } from './redis/redis.module';
import { HealthController } from './controller/health.controller';
import { VersionController } from './controller/version.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          options: {
            ignore: 'pid, hostname',
            singleLine: true,
            translateTime: 'SYS:standard',
          },
          target: 'pino-pretty',
        },
      },
    }),
    MetricsModule,
    RedisModule,
  ],
  controllers: [HealthController, VersionController],
})
export class AppModule {}
