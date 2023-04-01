import prisma from "libs/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const newClass = await prisma.classDescription.findMany({
    orderBy: {
      name: "asc",
    },
  });
  res.json(newClass);
}
