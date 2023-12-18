import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module'; // Ensure the auth module is imported here

@Module({
  imports: [AuthModule], // AuthModule is included in the imports array
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}