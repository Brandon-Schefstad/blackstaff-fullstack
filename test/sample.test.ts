import { createClassDescription } from "functions-to-test";
import { expect, test, vi } from "vitest"; // 👈🏻 Added the `vi` import
import prisma from "../libs/__mocks__/prisma";
vi.mock("../libs/prisma");

test("createUser should return the generated user", async () => {
  const newUser = { name: "Artificer" };
  prisma.classDescription.create.mockResolvedValue({ ...newUser, id: 1 });
  const user = await createClassDescription(newUser);
  expect(user).toStrictEqual({ ...newUser, id: 1 });
});
