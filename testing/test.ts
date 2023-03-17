import { createClass } from "./config/functions-with-context";
import { prismaMock } from "./config/singleton";

test("should create new Class ", async () => {
  const classModel = {
    id: 1,
    name: "Artificer",
  };

  prismaMock.classDescription.create.mockResolvedValue(classModel);

  await expect(createClass(classModel)).resolves.toEqual({
    id: 1,
    name: "Artificer",
  });
});
