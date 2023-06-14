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
          {spellList.map((spell: Spell, key) => {
            return <SpellComponent level={level} spell={spell} id={key} />;
          })}
        </ol>
      ) : (
        <></>
      )}
    </>
  );
};

export default SpellLevel;
