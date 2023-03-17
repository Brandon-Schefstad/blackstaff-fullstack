import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "testing/config/client";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const obj2 = await prisma.spell.findMany({
    where: {
      classes: {
        some: {
          name: "Bard",
        },
      },
    },
  });
  res.json({ obj2: obj2 });
}
