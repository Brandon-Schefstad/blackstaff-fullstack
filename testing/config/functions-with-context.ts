import { ClassDescription, Spell } from "@prisma/client";
import prisma from "./client";
export async function createClass(user: ClassDescription) {
  try {
    return await prisma.classDescription.create({
      data: user,
    });
  } catch (error) {
    return error;
  }
}
export async function createSpell(user: Spell) {
  return await prisma.spell.create({
    data: user,
  });
}

export async function findSpell() {
  return await prisma.spell.findMany({
    where: {
      classes: {
        some: {
          name: "Bard",
        },
      },
    },
  });
}
export async function findClass() {
  return await prisma.classDescription.findMany();
}
