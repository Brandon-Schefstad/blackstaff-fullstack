import { Spell } from "@prisma/client";
import SpellComponent from "./SpellComponent";
type SpellSectionProps = {
  spellList: Spell[];
};

const SpellSection = ({ spellList }: SpellSectionProps) => {
  return (
    <>
      {spellList ? (
        <>
          <section className="grid ">
            {spellList.map((spellItem: Spell) => {
              console.log(spellItem);
              return <SpellComponent spell={spellItem} />;
            })}
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default SpellSection;
