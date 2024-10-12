"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../../prisma/prisma.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async validateUser(email, password) {
        const user = await this.prisma.appUser.findUnique({
            where: { email },
        });
        if (user && (await bcrypt.compare(password, user.password))) {
            const { password, ...result } = user;
            return result;
        }
        throw new common_1.UnauthorizedException('E-mail e/ou senha incorretos, verifique e tente novamente');
    }
    async login(user) {
        const payload = { username: user.username, sub: user.id, type: user.type };
        return {
            id: user.id,
            type: user.type,
            name: user.username,
            token: this.jwtService.sign(payload),
        };
    }
    async register(createUserDto) {
        const { email, password } = createUserDto;
        const existingUser = await this.prisma.appUser.findUnique({ where: { email } });
        if (existingUser) {
            throw new common_1.UnauthorizedException('Erro, usuário informado já existe!');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await this.prisma.appUser.create({
            data: {
                ...createUserDto,
                password: hashedPassword,
                insDate: new Date(),
                updDate: new Date(),
                lastPasswordChange: new Date(),
                isActive: true,
                passwordExpires: false,
            },
        });
        return { message: 'Usuário criado com sucesso!' };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map