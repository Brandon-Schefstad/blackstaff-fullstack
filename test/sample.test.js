import { assert, describe, test } from "vitest";
import { spells } from "../data/parsing/parsedAndClean";

describe("DESCRIBE BLOCK", () => {
  test("TEST BLOCK", () => {
    const spellsWithBadEndings = spells.filter(
      (spell) => spell.effect.at(-1) !== "."
    );
    spellsWithBadEndings.forEach((spell) => {
      console.log(spell.name, [spell.effect.at(-1)]);
    });
    assert.equal(spellsWithBadEndings.length, 1);
  });
});
