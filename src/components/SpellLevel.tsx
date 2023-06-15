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
        <ol className="">
          {spellList.map((spell: Spell, index) => {
            return <SpellComponent index={index} level={level} spell={spell} />;
          })}
        </ol>
      ) : (
        <></>
      )}
    </>
  );
};

export default SpellLevel;
