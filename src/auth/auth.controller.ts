// import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
// import { LocalAuthGuard } from './local-auth.guard';
// import { JwtAuthGuard } from './jwt-auth.guard';
// import { AuthService } from './auth.service';

// @Controller('auth')
// export class AuthController {
//     constructor(private authService: AuthService) {}
    
//   @UseGuards(LocalAuthGuard)
//   @Post('auth/login')
//   async login(@Request() req) {
//     return this.authService.login(req.user);
//   }

    
//   @UseGuards(LocalAuthGuard)
//   @Post('auth/register')
//   async register(@Request() req) {
//     return this.authService.register(req.user);
//   }

  
// }
