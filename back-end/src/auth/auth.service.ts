import { Injectable, Inject, UnauthorizedException, HttpException, HttpStatus } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto } from "./dto/login.dto";
import { User } from "src/entities/user.entity";
import { RegisterUserDto } from "./dto/register.dto";

@Injectable()
export class AuthService {
    @Inject(JwtService)
    private jwtService: JwtService;
  
    @Inject(UserService)
    private userService: UserService;


    async validateCredentials(email: string, password: string): Promise<any> {
        const user = await this.userService.getOne({ email: email.toLowerCase() });
    
        if (!user) {
          throw new UnauthorizedException({
            status: 'error',
            data: ['Email does not exist!'],
          });
        }
    
        return user && (await bcrypt.compare(password, user.password))
          ? user
          : null;
      }

      async login(loginDto: LoginDto) {
        const user = await this.validateCredentials(
          loginDto.email,
          loginDto.password,
        );
    
        return {
          accessToken: this.jwtService.sign({ email: user.email, sub: user.id }),
        };
      }

      async signup(user: RegisterUserDto) {        
        let createdUser: User;
    
        try {
          
          const foundUser = await this.userService.getOne({ email: user.email });
          
          
          if (foundUser) {
            throw new HttpException(
              {
                message: 'Input data validation failed',
                errors: { email: 'Email is already in use!' },
              },
              HttpStatus.UNPROCESSABLE_ENTITY,
            );
          }
          user.password = await bcrypt.hash(user.password, 10);
          
    
          createdUser = await this.userService.register(user);
        } catch (error) {
          throw new HttpException(error.response, error.status);
        }
    
        if (!createdUser) {
          throw new HttpException(
            'Validation failed!',
            HttpStatus.UNPROCESSABLE_ENTITY,
          );
        }
        return true;
      }
    
}