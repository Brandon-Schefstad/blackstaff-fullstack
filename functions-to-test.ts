// test/sample.test.ts
import { ClassDescription, Prisma, Spell } from "@prisma/client";
import prisma from "./libs/prisma";
export const createClassDescription = async (
  user: Prisma.ClassDescriptionCreateInput
): Promise<ClassDescription> => {
  return await prisma.classDescription.create({
    data: user,
  });
};
export const createSpell = async (
  user: Prisma.SpellCreateInput
): Promise<Spell> => {
  if (!user.concentration) {
    user.concentration = false;
  }
  if (!user.ritual) {
    user.ritual = false;
  }
  return await prisma.spell.create({
    data: user,
  });
};
