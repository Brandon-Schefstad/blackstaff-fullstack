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
          className="carousel w-screen p-2 md:p-2 lg:w-auto 
           "
        >

          <ol className="flex  gap-16 overflow-y-hidden overflow-x-scroll bg-zinc-900 p-8 align-middle  lg:grid lg:h-auto  lg:grid-cols-4  lg:gap-12 lg:overflow-x-hidden lg:py-8 lg:px-24">

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
