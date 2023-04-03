import prisma from "libs/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import spells from "../../../../data/parsing/parsedAndClean";
const spellsToSend = spells;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  spellsToSend.forEach(async (testSpell) => {
    console.log(testSpell.name);
    if (testSpell?.classes.length) {
      testSpell.classes = testSpell.classes.map((className) => {
        // console.log(testSpell?.classes);
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
  });
  res.json(200);
}
