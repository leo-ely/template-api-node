import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const start = Date.now();

  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.useLogger(app.get(Logger));
  await app.listen(process.env.PORT ?? 3000, () => {
    const elapsed = Date.now() - start; // ⏱️ Elapsed time
    app.get(Logger).log(`🚀 Application started in ${elapsed}ms`);
  });
}

bootstrap();
