/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ClassDescription } from "@prisma/client";
import prisma from "libs/prisma";

import { NextApiRequest, NextApiResponse } from "next";

export const createClassDescription = async (
  className: string
): Promise<ClassDescription> => {
  const user = { name: className };
  return await prisma.classDescription.create({
    data: user,
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;
  const newClasses: ClassDescription[] = await body.names.map(
    async (className: string) => {
      return await createClassDescription(className);
    }
  );
  res.json(newClasses);
}
