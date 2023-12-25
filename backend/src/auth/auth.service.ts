// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async validateUser(email: string): Promise<User | null> {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email }, // Only the email string is provided here
      });
      
      return user;
    } catch (error) {
      // Log the error and possibly throw an exception
      console.error('Error during user validation:', error);
      throw error;
    }
  }

  async saveOrUpdateGoogleUser(userData: any): Promise<User> {
    const { email, firstName, lastName, idProvider, provider } = userData;
  
    // Check if a user with the given email exists already
    let user = await this.prisma.user.findUnique({
      where: { email },
    });
  
    if (user) {
      // User already exists, decide if you want to update certain fields
      return user;
    } else {
      // User does not exist, create a new one
      return await this.prisma.user.create({
        data: {
          email,
          firstName,
          lastName,
          providor: provider, // Note the corrected property name based on your schema
          idProvider,
          password: '', // Assign a placeholder or manage without a password since it's OAuth
          // Include any other fields as necessary according to your schema
        },
      });
    }
  }

  // Add additional methods related to the authentication process as needed
}