import { ClassDescription, Spell } from "@prisma/client";
import { createClassDescription, createSpell } from "functions-to-test";
import { expect, test, vi } from "vitest"; // 👈🏻 Added the `vi` import
import prisma from "../libs/__mocks__/prisma";
vi.mock("../libs/prisma");

test("createClassDescription should return the generated class", async () => {
  const newClass = { name: "Artificer" };
  prisma.classDescription.create.mockResolvedValue({ ...newClass, id: 1 });
  const createdClass: ClassDescription = await createClassDescription(newClass);
  expect(createdClass).toStrictEqual({ ...newClass, id: 1 });
});
test("createUser should return the generated user", async () => {
  const newSpell = {
    name: "Ability Rip",
    level: 1,
    school: "test",
    range: 5,
    duration: 1,
    components: "S",
    description: "X",
  };
  prisma.spell.create.mockResolvedValue({
    ...newSpell,
    id: 1,
    concentration: false,
    ritual: false,
  });
  const user: Spell = await createSpell(newSpell);
  console.log(user);
  expect(user).toStrictEqual({
    ...newSpell,
    id: 1,
  });
});
