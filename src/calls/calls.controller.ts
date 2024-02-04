import { Body, Controller, Get, Post } from '@nestjs/common';
import { CallsService } from './calls.service';
import { Prisma } from '@prisma/client';

@Controller('calls')
export class CallsController {
  constructor(private callsService: CallsService) {}

  @Get()
  async getAll() {
    return await this.callsService.findMany({});
  }

  @Post()
  async create(@Body() data: Prisma.CallCreateInput) {
    return await this.callsService.create(data);
  }
}
