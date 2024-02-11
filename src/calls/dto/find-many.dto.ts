import { Prisma } from '@prisma/client';
import { IsInt, IsOptional } from 'class-validator';

export class FindManyCallsDTO {
  @IsOptional()
  @IsInt()
  skip?: number;

  @IsOptional()
  @IsInt()
  take?: number;
  cursor?: Prisma.CallWhereUniqueInput;
  where?: Prisma.CallWhereInput;
  orderBy?: Prisma.CallOrderByWithRelationInput;
}
