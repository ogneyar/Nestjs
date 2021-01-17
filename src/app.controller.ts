import { Controller, Delete, Get, Patch, Post, Put, Head, Options } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postHello(): string {
    return this.appService.postHello();
  }

  @Put()
  putHello(): string {
    return this.appService.putHello();
  }
  
  @Patch()
  patchHello(): string {
    return this.appService.patchHello();
  }

  @Delete()
  deleteHello(): string {
    return this.appService.deleteHello();
  }
  
  @Head()
  headHello(): string {
    return this.appService.headHello(); // not work...
  }

  @Options()
  optionsHello(): string {
    return this.appService.optionsHello();
  }

}
