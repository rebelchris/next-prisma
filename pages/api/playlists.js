import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const playlists = await prisma.playlist.findMany();
  res.json(playlists);
}
