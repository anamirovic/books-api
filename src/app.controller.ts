import { Controller, Get, Request, Post, UseGuards, Logger } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AppService } from './app.service';
//import { AppService } from './app.service';
//import { LocalAuthGuard } from './auth/local-auth.guard';
//import { JwtAuthGuard } from './auth/jwt-auth.guard';
//import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  //constructor(private readonly appService: AppService) {}
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  
  constructor(private authService: AuthService, private appService: AppService) {}
  

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }

  @UseGuards(JwtAuthGuard)
@Get('profile')
async getProfile(@Request() req) {
  Logger.log(req.user);
  const user = await this.appService.getUser(req.user.userId as number);
  //console.log('User role in profile:', req.user.role); // Dodajte ovu liniju za debug
  return user;
  
}
}
