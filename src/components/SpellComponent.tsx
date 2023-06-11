import { Spell } from "@prisma/client";
import { Inconsolata } from "next/font/google";

type SpellComponentTypes = {
  spell: Spell;
  id: number;
};

const inconsolata = Inconsolata({ subsets: ["latin"] });
const SpellComponent = ({ spell }: SpellComponentTypes) => {
  const spellDescription = spell.description.split("At Higher Levels.");

  const longCastTime = spell.castTime.includes(", which you take when");
  return (
    <li
      key={spell.id}
      className={
        " relative  h-[570px]  min-w-full flex-col rounded-xl    outline outline-4   focus:outline-lime-400 lg:min-w-fit "
      }
    >
      <div className=" card-compact flex h-full flex-col rounded-t-lg pb-12">
        <h2
          className={` mb-[-0.25rem] flex min-h-[45px] items-end rounded-t-lg bg-[#1B0000]  pl-4 text-left font-[Amagro]  font-bold tracking-wide text-amber-50 ${
            spell.name.length > 22
              ? "pb-2 text-xs"
              : spell.name.length > 14
              ? "pb-[6px] text-sm"
              : "text-md pb-1 "
          } `}
        >
          {spell.name}
        </h2>

        <section className={inconsolata.className + "    mt-[-0.25rem] "}>
          <section className={""}></section>
        </section>
      </div>
    </li>
  );
};

export default SpellComponent;
