import { ClassDescription, Spell } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import {
  createClass,
  createSpell,
} from "../../../testing/config/functions-with-context";
const classModel: ClassDescription = {
  id: 1,
  name: "Artificer",
};
const classModel2: ClassDescription = {
  id: 2,
  name: "Bard",
};
const spellModel: Spell = {
  id: 1,
  name: "Ability Rip",
  level: 6,
  school: "necromancy",
  range: 5,
  duration: 1,
  components: "V, S",
  concentration: true,
  description:
    "You can rob a creature of one of its inherent aptitudes and give that capability to an ally. Choose one ability score. One creature of your choice within range makes a saving throw with that ability score. On a failure, the target has disadvantage on checks and saving throws with the chosen ability score. In addition, the target has disadvantage on attack rolls using the chosen ability score, and deals only half damage with such attacks if they are weapon attacks.",
  classes: {
    connect: [{ name: "Artificer" }],
  },
};
const spellModel2: Spell = {
  id: 2,
  name: "Bard Spell",
  level: 6,
  school: "necromancy",
  range: 5,
  duration: 1,
  components: "V, S",
  concentration: true,
  description: "You.",
  classes: {
    connect: [{ name: "Bard" }],
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await createClass(classModel);
  await createClass(classModel2);
  await createSpell(spellModel);
  await createSpell(spellModel2);
  res.json({ msg: "success" });
}
