import { PrismaClient } from '@prisma/client';
import { playlists } from './seeds/playlists';

const prisma = new PrismaClient();

async function main() {
  await prisma.playlist.createMany({
    data: playlists,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
