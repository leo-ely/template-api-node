import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('template-api-node')
export class VersionController {
  constructor(private configService: ConfigService) {}

  @Get('app-version')
  getAppVersion() {
    return { version: this.configService.get('APP_VERSION') };
  }
}
