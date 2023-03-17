import type { ClassDescription, Spell } from "@prisma/client";
import {
  createClass,
  createSpell,
  findSpell,
} from "./config/functions-with-context";
import { prismaMock } from "./config/singleton";

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

test("should create new Class ", async () => {
  prismaMock.classDescription.create.mockResolvedValue(classModel);
  await expect(createClass(classModel)).resolves.toEqual({
    id: 1,
    name: "Artificer",
  });
});
test("should create new Spell ", async () => {
  prismaMock.spell.create.mockResolvedValue(spellModel);
  await expect(createSpell(spellModel)).resolves.toEqual(spellModel);
});
test("should attach ClassDescription to Spell ", async () => {
  prismaMock.spell.create.mockResolvedValue(spellModel);
  prismaMock.spell.create.mockResolvedValue(spellModel2);
  prismaMock.spell.findMany.mockResolvedValue([spellModel]);
  await expect(findSpell()).resolves.toEqual([spellModel]);
});
