import { Controller, Get } from '@nestjs/common';

@Controller('template-api-node')
export class HealthController {
  @Get('health')
  getHealth() {
    return { status: 'ok' };
  }
}
