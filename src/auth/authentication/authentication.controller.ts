import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { Response } from 'express';
import { AuthDecorator } from './decorators/auth.decorator';
import { AuthType } from './enums/auth-type.enum';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { ApiResponse } from '@nestjs/swagger';

@AuthDecorator(AuthType.NONE)
@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @ApiResponse({ status: 200, description: 'Registers a new User.' })
  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authenticationService.signUp(signUpDto);
  }

  @ApiResponse({ status: 200, description: 'Sign an existing User in.' })
  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  async signIn(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const token = await this.authenticationService.signIn(signInDto);
    response.cookie('accessToken', token.accessToken, {
      secure: true,
      httpOnly: true,
      sameSite: true,
    });

    return { refreshToken: token.refreshToken };
  }

  @ApiResponse({
    status: 200,
    description: 'Updates JWT tokens for an authenticated User.',
  })
  @HttpCode(HttpStatus.OK)
  @Post('refresh-tokens')
  refreshTokens(@Body() refreshTokenDto: RefreshTokenDto) {
    return this.authenticationService.refreshTokens(refreshTokenDto);
  }
}
