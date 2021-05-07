import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {  //đây là những gì trang chủ hiển thị
    return this.appService.getHello()
  }
}
