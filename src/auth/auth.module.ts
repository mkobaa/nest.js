import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './google.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    PassportModule, // You typically don't need to set a defaultStrategy here for Google OAuth
  ],
  providers: [
    AuthService,
    GoogleStrategy, // Make sure you import GoogleStrategy if you've created it
  ],
  controllers: [
    AuthController, // Include the AuthController if you've created one
  ],
})
export class AuthModule {}