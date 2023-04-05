import { Spell } from "@prisma/client";
import SpellComponent from "./SpellComponent";

type SpellSectionProps = {
  key: string;
  spells: Spell[];
};

const SpellSection = ({ spells, key }: SpellSectionProps) => {
  console.log(key);
  return (
    <>
      {" "}
      <h1 className="text-center font-[amagro]  text-2xl underline">
        {JSON.stringify(key)}
      </h1>
      <section className="grid ">
        {spells.map((spell: Spell) =>
          spells.length ? <SpellComponent spell={spell} /> : <h1>None</h1>
        )}
      </section>
    </>
  );
};

export default SpellSection;
