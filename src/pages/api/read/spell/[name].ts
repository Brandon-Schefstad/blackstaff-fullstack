import prisma from "libs/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const name = req.query.name;
  let newClass = {};
  if (name) {
    newClass = await prisma.spell.findMany({
      where: {
        classes: {
          some: {
            name: `${name}`,
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });
  }

  res.json(newClass);
}
