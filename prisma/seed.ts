import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();

const amount = 500;
const CALL_TYPE = ['error', 'recommendation', 'remark'];
const CALL_STATUS = ['in queue', 'in progress', 'finished'];

async function main() {
  for (let i = 0; i < amount; i++) {
    await prisma.call.create({
      data: {
        author: faker.person.fullName(),
        callType: CALL_TYPE[Math.floor(Math.random() * CALL_TYPE.length)],
        callStatus: CALL_STATUS[Math.floor(Math.random() * CALL_STATUS.length)],
        createdAt: faker.date.recent({ days: 60 }),
        description: faker.lorem.text(),
      },
    });
  }
}

main()
  .then(async () => {
    console.log('Seeding complete!');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
