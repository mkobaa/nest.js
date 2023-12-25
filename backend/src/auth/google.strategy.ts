// src/auth/google.strategy.ts
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { AuthService } from './auth.service';
import { User } from '@prisma/client'; // Import the User type (Make sure the path is correct)

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private authService: AuthService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,      // Your Google App Client ID
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,  // Your Google App Client Secret
      callbackURL: process.env.GOOGLE_CALLBACK_URL,    // The callback URL after Google sign-in
      scope: ['email', 'profile'], // Scope specifies what data you want from user's Google account
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    try {
      if (!profile) {
        throw new UnauthorizedException();
      }
      
      // Extract the necessary information from the Google profile
      const { name, emails, id, photos } = profile;
      const user = {
        email: emails[0].value, // Take first email from profile (assuming it's the primary one)
        firstName: name.givenName,
        lastName: name.familyName,
        picture: photos[0].value, // URL of the user's profile picture
        idProvider: id, // Google user ID
        provider: 'google', // The provider name
        // accessToken: accessToken, // Be very cautious with access tokens and do not store unless absolutely necessary
      };

      // Call a method in AuthService to handle the database logic
      const savedUser: User = await this.authService.saveOrUpdateGoogleUser(user);

      return done(null, savedUser); // `savedUser` is attached to the request object as `req.user`
    } catch (error) {
      done(error, false);
    }
  }
}