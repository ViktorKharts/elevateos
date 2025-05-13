import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  @ApiResponse({ status: 200, description: 'Health check route.' })
  @Get('check-health')
  getHello(): boolean {
    return true;
  }
}
