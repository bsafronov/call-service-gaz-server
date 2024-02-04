import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CallsService } from './calls.service';

@Controller('calls')
export class CallsController {
  constructor(private callsService: CallsService) {}

  @Get()
  async findAll() {
    return await this.callsService.findMany({});
  }

  @Get(':id')
  async findUnique(@Param('id') id: string) {
    return await this.callsService.findUnique({ id: Number(id) });
  }

  @Post()
  async create(@Body() data: Prisma.CallCreateInput) {
    return await this.callsService.create(data);
  }
}
