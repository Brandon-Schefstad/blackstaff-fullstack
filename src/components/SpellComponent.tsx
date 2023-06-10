import { Spell } from "@prisma/client";
import { Inconsolata } from "next/font/google";
import SpellDescription from "./SpellDescription";
import SpellFooter from "./SpellFooter";
import SpellStats from "./SpellStats";

type SpellComponentTypes = {
  spell: Spell;
  id: number;
};
interface spellColorHashType {
  abjuration: string;
  alteration: string;
  conjuration: string;
  divination: string;
  enchantment: string;
  evocation: string;
  illusion: string;
  invocation: string;
  necromancy: string;
  transmutation: string;
}

function determineSpellColor(
  text: boolean,
  spellSchool: string,
  value: number
): string {
  let fallBackSpellSchool = spellSchool;
  if (spellSchool.at(-1) === ",") {
    fallBackSpellSchool = spellSchool.slice(0, -1);
  }
  const spellColorHash: spellColorHashType = {
    abjuration: "sky",
    alteration: "yellow",
    conjuration: "green",
    divination: "indigo",
    enchantment: "rose",
    evocation: "red",
    illusion: "pink",
    invocation: "indigo",
    necromancy: "purple",
    transmutation: "emerald",
  };
  const ColorIntensityHash = {
    "0.5": "50",
    "1": "100",
    "2": "200",
    "3": "300",
    "4": "400",
    "5": "500",
    "6": "600",
    "7": "700",
    "8": "800",
    "9": "900",
    "9.5": "950",
  };
  let returnString = "";
  if (text) {
    // @ts-ignore
    returnString = `text-${spellColorHash[fallBackSpellSchool]}-${
      // @ts-ignore
      ColorIntensityHash[JSON.stringify(value)]
    }`;
  } else {
    // @ts-ignore
    returnString = `bg-${spellColorHash[fallBackSpellSchool]}-${
      // @ts-ignore
      ColorIntensityHash[JSON.stringify(value)]
    }`;
  }
  return returnString;
}

const inconsolata = Inconsolata({ subsets: ["latin"] });
const SpellComponent = ({ spell }: SpellComponentTypes) => {
  const spellDescription = spell.description.split("At Higher Levels.");
  const spellSchool = spell.school.toLowerCase();

  const spellColor9: string = determineSpellColor(false, spellSchool, 9);

  const longCastTime = spell.castTime.includes(", which you take when");
  return (
    <li
      key={spell.id}
      className={
        " relative  h-[570px]  min-w-full flex-col rounded-xl    outline outline-4   focus:outline-lime-400 lg:min-w-fit " +
        spellColor9
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
          <section className={""}>
            <SpellStats spell={spell} spellColor={spellColor9} />
            <SpellDescription
              font={inconsolata.className}
              spellDescription={spellDescription}
              longCastTime={longCastTime}
            />
          </section>
        </section>
        <SpellFooter spell={spell} />
      </div>
    </li>
  );
};

export default SpellComponent;
