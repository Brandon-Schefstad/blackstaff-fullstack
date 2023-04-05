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
          <ol className="grid ">
            {spellList.map((spellItem: Spell, i) => {
              return <SpellComponent spell={spellItem} id={i} />;
            })}
          </ol>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default SpellSection;
