import { Spell } from "@prisma/client";
import { Inconsolata } from "next/font/google";
type SpellComponentTypes = {
  spell: Spell;
  id: number;
};

function determineSpellColor(spellSchool: string, value: number) {
  let fallBackSpellSchool = "";
  if (spellSchool.at(-1) === ",") {
    fallBackSpellSchool = spellSchool.slice(0, -1);
  }
  const spellColorHash = {
    abjuration: ["bg-blue-100", "bg-blue-200", "bg-blue-300", "bg-blue-400"],
    alteration: [
      "bg-orange-100",
      "bg-orange-200",
      "bg-orange-300",
      "bg-orange-400",
    ],
    conjuration: [
      "bg-green-100",
      "bg-green-200",
      "bg-green-300",
      "bg-green-400",
    ],
    divination: ["bg-teal-100", "bg-teal-200", "bg-teal-300", "bg-teal-400"],
    enchantment: ["bg-rose-100", "bg-rose-200", "bg-rose-300", "bg-rose-400"],
    evocation: ["bg-blue-100", "bg-blue-200", "bg-blue-300", "bg-blue-400"],
    illusion: ["bg-cyan-100", "bg-cyan-200", "bg-cyan-300", "bg-cyan-400"],
    invocation: [
      "bg-indigo-100",
      "bg-indigo-200",
      "bg-indigo-300",
      "bg-indigo-400",
    ],
    necromancy: [
      "bg-purple-100",
      "bg-purple-200",
      "bg-purple-300",
      "bg-purple-400",
    ],

    transmutation: [
      "bg-emerald-100",
      "bg-emerald-200",
      "bg-emerald-300",
      "bg-emerald-400",
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

  return (
    <section className="max-h-[650px] min-w-[300px] overflow-y-scroll border-2 border-solid border-yellow-700">
      {spell ? (
        <li key={spell.id} className="min-h-full bg-yellow-50">
          <section
            className={inconsolata.className + " grid  gap-2  p-4 text-xs"}
          >
            <h1 className="  ml-2 text-center font-[Amagro] text-base ">
              {JSON.stringify(id + 1)}. {spell.name ? spell.name : "None"}
            </h1>
            <h3 className="m-auto mb-2 flex gap-2 font-bold">
              {spell.school} {spell.concentration && <h2>| Concentration</h2>}
              {spell.ritual && <h2>| Ritual</h2>}
            </h3>
            <div
              className={
                " grid justify-center border-solid border-black p-2 " +
                spellColor1
              }
            >
              <section className="flex flex-col ">
                <section className="m-auto flex gap-1">
                  ({spell.S && <h3>S</h3>}
                  {spell.M && <h3> M</h3>}
                  {spell.V && <h3> V</h3>})
                </section>
                <h3> {spell.M && <> Material: {spell.material} </>}</h3>
              </section>
            </div>
            <section className={spellColor2}>
              <div className={"grid grid-cols-2 items-center gap-2 text-sm  "}>
                {" "}
                <section className="col-span-2 flex flex-col p-2">
                  <h2>{spell.duration}</h2>
                  <h2>{spell.spellRange}</h2>
                  <span>{spell.castTime}</span>
                </section>
              </div>
            </section>

            <section className="grid ">
              <section
                className={
                  spellColor3 +
                  " m-auto max-w-[50ch]  p-4 text-left indent-3 text-sm leading-tight lg:max-w-[90ch]"
                }
              >
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
              <section className={"p-2 " + spellColor4}>
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
