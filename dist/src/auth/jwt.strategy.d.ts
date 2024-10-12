import { UsersService } from '../users/users.service';
import { JwtPayload } from './jwt-payload.interface';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly usersService;
    constructor(usersService: UsersService);
    validate(payload: JwtPayload): Promise<{
        id: number;
        email: string;
        username: string;
        password: string;
        lastPasswordChange: Date;
        insDate: Date;
        updDate: Date;
        insUser: string;
        updUser: string;
        type: string;
        passwordValidity: Date;
        passwordExpires: boolean;
        isActive: boolean;
    }>;
}
export {};
