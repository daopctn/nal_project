import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) { }

    async validateUser(username: string, password: string): Promise<any> {
        if (username === 'admin' && password === 'dao02112003') {
            return { userId: 1, username: 'admin' };
        }
        throw new UnauthorizedException('Invalid credentials');
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
