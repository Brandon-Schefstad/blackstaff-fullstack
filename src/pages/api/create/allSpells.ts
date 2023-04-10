import prisma from "libs/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { spells } from "../../../../data/parsing/parsedAndClean";
const spellsToSend = spells;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  spellsToSend.forEach(async (testSpell, i) => {
    setTimeout(async () => {
      if (testSpell?.classes.length) {
        //@ts-ignore
        testSpell.classes = testSpell.classes.map((className) => {
          return { name: className };
        });
        await prisma.spell.create({
          data: {
            ...testSpell,
            classes: {
              //@ts-ignore
              connect: testSpell.classes,
            },
          },
        });
      }
    }, i * 200);
  });
  res.json(200);
}
