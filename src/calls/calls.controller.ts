import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CallsService } from './calls.service';
import { FindManyCallsDTO } from './dto/find-many.dto';

@Controller('calls')
export class CallsController {
  constructor(private callsService: CallsService) {}

  @Get()
  async findAll(@Query() params: FindManyCallsDTO) {
    return await this.callsService.findMany(params);
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
