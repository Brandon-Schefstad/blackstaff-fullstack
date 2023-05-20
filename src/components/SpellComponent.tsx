import { Spell } from "@prisma/client";
import { Inconsolata } from "next/font/google";
import SpellDescription from "./SpellDescription";
import SpellFooter from "./SpellFooter";
import SpellStats from "./SpellStats";

type SpellComponentTypes = {
  spell: Spell;
  id: number;
};

function determineSpellBorder(spellSchool: string): string {
  const spellColorHash = {
    abjuration: "border-sky-600",
    alteration: "border-yellow-600",
    conjuration: "border-green-600",
    divination: "border-indigo-600",
    enchantment: "border-rose-600",
    evocation: "border-red-600",
    illusion: "border-pink-600",
    invocation: "border-indigo-600",
    necromancy: "border-purple-600",
    transmutation: "border-emerald-600",
  };
  // @ts-ignore
  if (spellColorHash[spellSchool]) {
    // @ts-ignore
    return spellColorHash[spellSchool];
  } else {
    return spellColorHash["transmutation"];
  }
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
  const spellColorHash = {
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
const SpellComponent = ({ spell, id }: SpellComponentTypes) => {
  const spellDescription = spell.description.split("At Higher Levels.");
  const spellSchool = spell.school.toLowerCase();
  const spellColor1: string = determineSpellColor(false, spellSchool, 1);
  const spellColor2: string = determineSpellColor(false, spellSchool, 2);
  const spellColor3: string = determineSpellColor(false, spellSchool, 3);
  const spellColor4: string = determineSpellColor(false, spellSchool, 4);
  const spellColor9: string = determineSpellColor(false, spellSchool, 9);

  const spellTextColor9: string = determineSpellColor(true, spellSchool, 9);

  const borderColor: string = determineSpellBorder(spellSchool);
  const longCastTime = spell.castTime.includes(", which you take when");
  return (
    <li
      key={spell.id}
      tabIndex={0}
      className={
        " relative h-[570px] min-w-full flex-col  rounded-xl  outline outline-4   focus:outline-lime-400 lg:min-w-fit " +
        spellColor9
      }
    >
      <div className=" card-compact  rounded-t-lg  ">
        <h2
          className={` mb-[-0.25rem] flex h-[45px] items-end rounded-t-lg bg-[#1B0000]  pl-4 text-left font-[Amagro]  font-bold tracking-wide text-amber-50 ${
            spell.name.length > 22
              ? "pb-2 text-xs"
              : spell.name.length > 14
              ? "pb-[6px] text-sm"
              : "text-md pb-1 "
          } `}
        >
          {spell.name}
        </h2>

        <section className={inconsolata.className + "    mt-[-0.25rem]  "}>
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
