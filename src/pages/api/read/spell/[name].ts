import prisma from "libs/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const name: string | string[] | undefined = req.query.name;
  let newClass = {};
  if (name) {
    newClass = await prisma.spell.findMany({
      where: {
        classes: {
          some: {
            name: `${typeof name === "string" ? name : "N/A"}`,
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
