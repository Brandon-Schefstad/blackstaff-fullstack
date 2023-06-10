import prisma from "libs/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { spells } from "../../../../data/parsing/parsedAndClean";
const spellsToSend = spells;
var interval = 100;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  spellsToSend.forEach(async (testSpell, index) => {
    setTimeout(async function () {
      if (testSpell?.classes.length) {
        testSpell.classes = testSpell.classes.map((className) => {
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
    }, index * interval);
  });
  res.json(200);
}
