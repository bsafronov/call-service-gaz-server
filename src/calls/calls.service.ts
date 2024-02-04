import { Injectable } from '@nestjs/common';
import { Call, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CallsService {
  constructor(private prisma: PrismaService) {}

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CallWhereUniqueInput;
    where?: Prisma.CallWhereInput;
    orderBy?: Prisma.CallOrderByWithRelationInput;
  }): Promise<Call[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.call.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.CallCreateInput): Promise<Call> {
    return this.prisma.call.create({ data });
  }
}
