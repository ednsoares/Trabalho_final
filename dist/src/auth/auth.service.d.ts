import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        id: any;
        type: any;
        name: any;
        token: string;
    }>;
    register(createUserDto: any): Promise<any>;
}
