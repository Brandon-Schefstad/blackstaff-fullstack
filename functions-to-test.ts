// test/sample.test.ts
import { Prisma } from "@prisma/client";
import prisma from "./libs/prisma";
export const createClassDescription = async (
  user: Prisma.ClassDescriptionCreateInput
) => {
  return await prisma.classDescription.create({
    data: user,
  });
};
