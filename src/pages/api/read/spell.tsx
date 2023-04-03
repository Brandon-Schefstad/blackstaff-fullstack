import prisma from "libs/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.query);
  const name = req.query.classDescriptionName;
  const newClass = await prisma.spell.findMany({
    where: {
      classes: {
        some: {
          name: `${name}`,
        },
      },
    },
    orderBy: {
      level: "asc",
    },
  });
  res.json(newClass);
}
