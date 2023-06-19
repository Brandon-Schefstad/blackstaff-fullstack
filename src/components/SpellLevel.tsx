import { Spell } from "@prisma/client";
import SpellComponent from "./SpellComponent";

type SpellLevelPropTypes = {
  level: string;
  spellList: Spell[];
};
const SpellLevel = ({ level, spellList }: SpellLevelPropTypes) => {
  return (
    <>
      {spellList.length ? (
        <section>
          {spellList.map((spell: Spell, index) => {
            return (
              <SpellComponent
                key={index}
                index={index}
                level={level}
                spell={spell}
              />
            );
          })}
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default SpellLevel;
