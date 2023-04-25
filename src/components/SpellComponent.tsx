import { Spell } from "@prisma/client";
import { Inconsolata } from "next/font/google";
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

  const spellBlockStyle = " bg-white  px-2 font-bold text-base";

  return (
    <section
      className={"  min-w-[320px] border-2 lg:min-w-[400px]  " + spellColor1}
    >
      {spell ? (
        <li
          key={spell.id}
          className={
            "flex max-h-[650px] min-h-[650px] min-w-full flex-col px-3  " +
            spellColor9
          }
        >
          <section
            className={
              inconsolata.className +
              " flex flex-col justify-center  pt-4  text-xs"
            }
          >
            <h1 className="mx-2 rounded-t-lg bg-amber-100  pt-4 font-[Amagro]  text-base font-bold">
              {JSON.stringify(id + 1)}. {spell.name ? spell.name : "None"}
            </h1>

            <section className="stats grid max-h-[700px] grid-cols-2 gap-[6px] p-2">
              <h2 className={spellBlockStyle}>{spell.duration}</h2>
              <h2 className={spellBlockStyle}>{spell.spellRange}</h2>
              <h2 className={spellBlockStyle + " col-span-2 text-sm"}>
                {spell.castTime}
              </h2>

              {spell.S || spell.M || spell.V ? (
                <section
                  className={
                    spellBlockStyle + " col-span-2 flex justify-center"
                  }
                >
                  ({spell.S && <h3>S</h3>}
                  {spell.M && <h3> M</h3>}
                  {spell.V && <h3> V</h3>})
                </section>
              ) : (
                <></>
              )}

              {spell.ritual && <h2 className={spellBlockStyle}>Ritual</h2>}

              {spell.concentration && (
                <h2 className={spellBlockStyle}>Concentration</h2>
              )}

              <h2 className={spellBlockStyle + " col-span-2 text-sm"}>
                {spell.school}
              </h2>

              <section className="description col-span-2 mt-4  max-h-[290px]  overflow-y-scroll bg-white p-4 text-left indent-4 text-sm leading-tight text-black lg:max-w-[90ch]">
                {spellDescription[0] ? (
                  spellDescription[0]
                    .split("  ")
                    .map((str: string, i: number) =>
                      i !== 0 ? (
                        <p className="decoration-dotted first-letter:text-lg first-letter:underline first-line:mt-4">
                          {" "}
                          {str}
                        </p>
                      ) : (
                        <p className="">{str}</p>
                      )
                    )
                ) : (
                  <></>
                )}
              </section>
              {spellDescription[1] && (
                <section
                  className={
                    borderColor +
                    " description col-span-2 max-h-[125px] flex-1 overflow-y-scroll bg-slate-100 px-3 py-2  text-left indent-4 text-sm leading-tight " +
                    spellColor2
                  }
                >
                  {spellDescription[1]}
                </section>
              )}
            </section>
            {/* {spell.quote ? (
                <section className={" p-2" + spellColor3}>{spell.quote}</section>
              ) : (
                <></>
              )} */}
          </section>
        </li>
      ) : (
        <></>
      )}
    </section>
  );
};

export default SpellComponent;
