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

  return (
    <section
      className={
        "min-w-[300px] border-2 border-solid border-yellow-700 lg:min-w-[400px]  " +
        spellColor1
      }
    >
      {spell ? (
        <li
          key={spell.id}
          className={"min-h-full  min-w-full bg-amber-100  " + spellColor1}
        >
          <section
            className={
              inconsolata.className +
              " grid justify-center  bg-amber-100  text-xs"
            }
          >
            <h1
              className={
                spellColor9 +
                "  min-w-full pt-6 pb-2 text-center font-[Amagro]  text-base text-amber-300 lg:text-lg  "
              }
            >
              {JSON.stringify(id + 1)}. {spell.name ? spell.name : "None"}
            </h1>
            <section className="spellCard grid max-h-[700px] bg-amber-100   pt-4 pb-2 lg:text-base">
              <section
                className={
                  " m-auto  grid min-w-full grid-cols-6 items-center justify-center gap-2 px-8 pb-4 font-bold"
                }
              >
                {!spell.ritual && !spell.concentration ? (
                  <h2 className="col-span-6 ">{spell.school}</h2>
                ) : spell.ritual && spell.concentration ? (
                  <>
                    <h2 className="col-span-2">{spell.school}</h2>

                    <h2 className="col-span-2">Ritual</h2>

                    <h2 className="col-span-2">Concentration</h2>
                  </>
                ) : (
                  <>
                    <h2 className="col-span-3">{spell.school}</h2>

                    <h2 className="col-span-3">
                      {spell.concentration ? "Concentration" : "Ritual"}
                    </h2>
                  </>
                )}
              </section>

              <section className={"  px-4 py-2"}>
                <div className={" items-center gap-4  text-sm "}>
                  {" "}
                  <section className={"grid  lg:text-lg " + spellColor2}>
                    <h2>{spell.duration}</h2>
                    <h2>{spell.spellRange}</h2>
                  </section>
                </div>
              </section>
              <span className={spellTextColor9 + " mx-8 mb-4   md:text-base"}>
                {spell.castTime}
              </span>

              <section className="grid ">
                <section className=" m-auto mb-4 h-[300px] max-w-[50ch] overflow-y-scroll bg-slate-50  px-4 py-4 text-left indent-4 text-sm leading-tight text-black lg:max-w-[90ch] ">
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
              <div className={"mb-4 grid justify-center " + borderColor}>
                <section className="  mx-4 flex flex-col items-center  bg-amber-50 text-sm">
                  <section className="  ">
                    {spell.S || spell.M || spell.V ? (
                      <section className=" flex gap-1 py-3 px-4 ">
                        ({spell.S && <h3>S</h3>}
                        {spell.M && <h3> M</h3>}
                        {spell.V && <h3> V</h3>})
                      </section>
                    ) : (
                      <></>
                    )}
                  </section>
                  {spell.M && (
                    <h3 className="px-6 py-2 "> Material: {spell.material} </h3>
                  )}
                </section>
              </div>
              {spellDescription[1] && (
                <section
                  className={
                    borderColor +
                    "  overflow-y-scroll bg-slate-100 p-2 text-left indent-4 text-sm leading-tight " +
                    spellColor2
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
          </section>
        </li>
      ) : (
        <></>
      )}
    </section>
  );
};

export default SpellComponent;
