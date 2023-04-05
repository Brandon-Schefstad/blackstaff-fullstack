import { Spell } from "@prisma/client";
import SpellComponent from "./SpellComponent";

type SpellSectionProps = {
  spells: Spell[];
};

const SpellSection = ({ spells }: SpellSectionProps) => {
  return (
    <>
      <section className="grid ">
        {spells.map((spell: Spell) =>
          spells.length ? <SpellComponent spell={spell} /> : <h1>None</h1>
        )}
      </section>
    </>
  );
};

export default SpellSection;
