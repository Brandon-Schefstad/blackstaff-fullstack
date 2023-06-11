import { Spell } from "@prisma/client";
import prisma from "libs/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const name = req.query.classDescriptionName;
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
        level: "desc",
      },
    });
  }

  res.json(newClass);
}

export async function handler2(name: string) {
  let newClass: Spell[] = [];
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

  return newClass;
}
