/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Spell } from "@prisma/client";
import prisma from "libs/prisma";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const spellObject: Spell = req.body.spell;

  const newSpell = await prisma.spell.create({
    data: {
      ...spellObject,
    },
  });

  res.json(newSpell);
}
