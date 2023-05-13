import prisma from "libs/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import spells from "../../../../data/parsing/parsedAndClean";
const spellsToSend = spells;

async function connectSpell(testSpell: Spell) {
  if (testSpell?.classes.length) {
    testSpell.classes = testSpell.classes.map((className: string) => {
      return { name: className };
    });
    await prisma.spell.create({
      data: {
        ...testSpell,
        classes: {
          connect: testSpell.classes,
        },
      },
    });
  }
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  spellsToSend.forEach(async (testSpell, i) => {
    setTimeout(() => connectSpell(testSpell), i * 200);
  });
  res.json(200);
}
