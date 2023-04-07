import { Spell } from "@prisma/client";
import SpellLevel from "./SpellLevel";
type SpellSectionProps = {
  spellList: Spell[];
};

const SpellSection = ({ spellList }: SpellSectionProps) => {
  return (
    <>
      <ol className="grid">
        {spellList.map((spellItem: Spell, i) => {
          return <SpellLevel spell={spellItem} id={i} />;
        })}
      </ol>
    </>
  );
};

export default SpellSection;
