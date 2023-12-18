"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
class ConfigService {
    constructor() {
        this.envConfig = {
            GOOGLE_CLIENT_ID: 'your-google-client-id',
            GOOGLE_CLIENT_SECRET: 'your-google-client-secret'
        };
    }
    get(key) {
        return this.envConfig[key];
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map