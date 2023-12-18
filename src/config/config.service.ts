// src/config/config.service.ts
export class ConfigService {
    private readonly envConfig: { [key: string]: string } = {
      GOOGLE_CLIENT_ID: 'your-google-client-id',
      GOOGLE_CLIENT_SECRET: 'your-google-client-secret'
      // ... any other config variables
    };
  
    get(key: string): string {
      return this.envConfig[key];
    }
  }