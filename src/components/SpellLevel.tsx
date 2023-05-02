import { Spell } from "@prisma/client";
import SpellComponent from "./SpellComponent";

type SpellLevelPropTypes = {
  level: string;
  spellList: Spell[];
};
const SpellLevel = ({ level: level, spellList }: SpellLevelPropTypes) => {
  return (
    <>
      {spellList ? (
        <section
          className="carousel w-screen  p-4
           "
        >
          <ol className="flex h-[775px] gap-16 overflow-x-scroll p-2  align-middle   md:pl-12">
            {spellList.map((spell: Spell, key) => {
              return <SpellComponent spell={spell} id={key} />;
            })}
          </ol>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default SpellLevel;
