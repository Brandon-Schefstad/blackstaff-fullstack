import prisma from "libs/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // await prisma.classDescription.deleteMany({});
  await prisma.spell.deleteMany({});
  res.send(200);
}
