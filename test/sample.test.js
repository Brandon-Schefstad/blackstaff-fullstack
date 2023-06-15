import { assert, test } from "vitest";
import { spells } from "../data/parsing/parsedAndClean";

test("should first", () => {
  const spellsWithBadEndings = spells.filter(
    (spell) => spell.effect.at(-1) !== "."
  );
  spellsWithBadEndings.forEach((spell) => {
    console.log(spell.name, [spell.effect.at(-1)]);
  });
  assert.equal(spellsWithBadEndings.length, 0);
});
