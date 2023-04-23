import { Spell } from "@prisma/client";
import { Inconsolata } from "next/font/google";
type SpellComponentTypes = {
  spell: Spell;
  id: number;
};

function determineSpellBorder(spellSchool: string): string {
  const spellColorHash = {
    abjuration: "border-blue-600",
    alteration: "border-orange-600",
    conjuration: "border-green-600",
    divination: "border-teal-600",
    enchantment: "border-rose-600",
    evocation: "border-yellow-600",
    illusion: "border-cyan-600",
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
function determineSpellColor(spellSchool: string, value: number) {
  let fallBackSpellSchool = "";
  if (spellSchool.at(-1) === ",") {
    fallBackSpellSchool = spellSchool.slice(0, -1);
  }
  const spellColorHash = {
    abjuration: ["bg-blue-100", "bg-blue-200", "bg-blue-300", "text-blue-900"],
    alteration: [
      "bg-orange-100",
      "bg-orange-200",
      "bg-orange-300",
      "text-orange-900",
    ],
    conjuration: [
      "bg-green-100",
      "bg-green-200",
      "bg-green-300",
      "text-green-900",
    ],
    divination: ["bg-teal-100", "bg-teal-200", "bg-teal-300", "text-teal-900"],
    enchantment: ["bg-rose-100", "bg-rose-200", "bg-rose-300", "text-rose-900"],
    evocation: [
      "bg-yellow-100",
      "bg-yellow-200",
      "bg-yellow-300",
      "text-yellow-900",
    ],
    illusion: ["bg-cyan-100", "bg-cyan-200", "bg-cyan-300", "text-cyan-900"],
    invocation: [
      "bg-indigo-100",
      "bg-indigo-200",
      "bg-indigo-300",
      "text-indigo-900",
    ],

    necromancy: [
      "bg-purple-100",
      "bg-purple-200",
      "bg-purple-300",
      "text-purple-900",
    ],

    transmutation: [
      "bg-emerald-100",
      "bg-emerald-200",
      "bg-emerald-300",
      "text-emerald-900",
    ],
  };
  console.warn(spellSchool);
  // @ts-ignore
  if (spellColorHash[spellSchool]) {
    // @ts-ignore
    return spellColorHash[spellSchool][value - 1];
  } else {
    return spellColorHash["transmutation"][value - 1];
  }
}
const inconsolata = Inconsolata({ subsets: ["latin"] });
const SpellComponent = ({ spell, id }: SpellComponentTypes) => {
  const spellDescription = spell.description.split("At Higher Levels.");
  const spellSchool = spell.school.toLowerCase();
  const spellColor1: string = determineSpellColor(spellSchool, 1);
  const spellColor2: string = determineSpellColor(spellSchool, 2);
  const spellColor3: string = determineSpellColor(spellSchool, 3);
  const spellColor4: string = determineSpellColor(spellSchool, 4);
  const borderColor: string = determineSpellBorder(spellSchool);

  return (
    <section className="max-h-[650px] min-w-[300px] overflow-y-scroll border-2 border-solid border-yellow-700">
      {spell ? (
        <li key={spell.id} className={"min-h-full " + spellColor1}>
          <section
            className={
              inconsolata.className + " grid justify-center gap-2  py-6 text-xs"
            }
          >
            <h1 className="  ml-2 text-center font-[Amagro] text-base ">
              {JSON.stringify(id + 1)}. {spell.name ? spell.name : "None"}
            </h1>
            <h3 className={"m-auto mb-2 flex gap-2 font-bold " + spellColor4}>
              <h2>{spell.school}</h2>
              {spell.concentration && <h2>| Concentration</h2>}
              {spell.ritual && <h2>| Ritual</h2>}
            </h3>
            <div
              className={
                " m-auto mb-4 grid justify-center border-b-[2px]  border-solid bg-slate-100 p-2 " +
                borderColor
              }
            >
              <section className="  flex flex-col items-center px-4 ">
                <section className=" flex gap-1 ">
                  ({spell.S && <h3>S</h3>}
                  {spell.M && <h3> M</h3>}
                  {spell.V && <h3> V</h3>})
                </section>

                {spell.M && <h3 className=""> Material: {spell.material} </h3>}
              </section>
            </div>
            <section className={borderColor + " mb-2 border-b-2 bg-slate-50"}>
              <div className={"grid grid-cols-2 items-center gap-2 text-sm  "}>
                {" "}
                <section
                  className={spellColor4 + " col-span-2 flex flex-col p-2"}
                >
                  <h2>{spell.duration}</h2>
                  <h2>{spell.spellRange}</h2>
                  <span>{spell.castTime}</span>
                </section>
              </div>
            </section>

            <section className="grid ">
              <section className=" m-auto max-w-[50ch]  bg-slate-50  px-4 py-6 text-left indent-3 text-sm leading-tight text-black lg:max-w-[90ch] ">
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
            </section>
            {spellDescription[1] && (
              <section
                className={
                  borderColor + " border-b-2 border-solid p-2 " + spellColor2
                }
              >
                {spellDescription[1]}
              </section>
            )}
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
