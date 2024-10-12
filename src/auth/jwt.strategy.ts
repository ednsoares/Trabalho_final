import { Injectable, UnauthorizedException } from '@nestjs/common'; // Importando o UnauthorizedException
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UsersService } from '../users/users.service'; // Ajustando o caminho para UsersService
import { JwtPayload } from './jwt-payload.interface'; // Importando a interface do payload

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET, // Use a chave do arquivo .env
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.usersService.findById(payload.sub);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user; // Retorna o usuário
  }
}