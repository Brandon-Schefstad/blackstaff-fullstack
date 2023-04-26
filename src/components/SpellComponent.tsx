import { Spell } from "@prisma/client";
import { Inconsolata } from "next/font/google";
import Image from "next/image";
import castTimeLogo from "../../public/castTime.svg";
import concentrationLogo from "../../public/concentration.svg";
import durationLogo from "../../public/duration.svg";
import rangeLogo from "../../public/range.svg";
import ritualLogo from "../../public/ritual.svg";

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

  const spellBlockStyle =
    "flex flex-col justify-center bg-amber-100 px-2  text-base  ";

  return (
    <section className={"   min-w-[375px]  rounded-lg   "}>
      {spell ? (
        <li
          key={spell.id}
          className={"  relative   min-w-full flex-col rounded-xl  "}
        >
          <section
            className={`  rounded-t-lg  bg-white bg-opacity-80 px-4 pb-2 pt-4  text-left font-[Amagro] text-base tracking-wider underline`}
          >
            <h1>{spell.name ? spell.name : "None"}</h1>
            {/* <Image
              src={spellLogo}
              height={60}
              width={60}
              className="bg-white p-1"
            /> */}
          </section>
          <section
            className={
              inconsolata.className +
              `flex max-h-[675px] min-h-[675px]  flex-col justify-start    align-top text-xs  `
            }
          >
            <section
              className={
                " stats flex h-[635px] flex-col  gap-4  px-6 py-4 " +
                spellColor9
              }
            >
              <section
                className={
                  spellBlockStyle +
                  " grid grid-cols-4 items-center gap-[6px]  p-2  text-sm  text-black outline outline-2 outline-black"
                }
              >
                <Image
                  src={durationLogo}
                  height={20}
                  className=" m-auto"
                  alt="duration"
                />
                <h2 className="col-span-3">{spell.duration}</h2>
                <Image
                  src={rangeLogo}
                  height={20}
                  className="m-auto "
                  alt="range"
                />
                <h2 className={" col-span-3"}>{spell.spellRange}</h2>
                <Image
                  src={castTimeLogo}
                  height={20}
                  className=" m-auto"
                  alt="casting time"
                />

                <h2 className="col-span-3">{spell.castTime}</h2>
              </section>
              <section className="  flex  flex-col gap-4">
                <section
                  className={`description col-span-2  overflow-y-scroll bg-amber-50 bg-opacity-80 p-4 text-left indent-4 text-base leading-tight text-black outline outline-2 outline-black lg:max-w-[90ch]
                   ${
                     spellDescription[1] ? "max-h-[290px]" : "max-h-[400px] "
                   } `}
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
                {spellDescription[1] && (
                  <section
                    className={
                      " description col-span-2 max-h-[100px]  overflow-y-scroll bg-amber-50 bg-opacity-90 p-2 text-left  indent-4 text-sm leading-tight text-gray-800 text-black outline outline-2 outline-black"
                    }
                  >
                    <span>{spellDescription[1]}</span>
                  </section>
                )}
              </section>
            </section>
            <section
              className={` bottom-0 right-[0rem] grid min-h-[50px] w-full grid-cols-3 justify-center rounded-b-lg bg-white bg-opacity-80  ${
                spell.ritual || spell.concentration ? " " : " "
              } 
                `}
            >
              {spell.ritual && (
                <Image
                  src={ritualLogo}
                  alt={"Ritual"}
                  height={35}
                  width={35}
                  className="col-start-1 m-auto  self-center"
                />
              )}

              {spell.concentration && (
                <Image
                  src={concentrationLogo}
                  // height={35}
                  width={35}
                  className="col-start-2 m-auto self-center"
                  alt={"Concentration"}
                />
              )}
              {spell.S || spell.M || spell.V ? (
                <section
                  className={
                    " col-start-3 m-auto flex min-h-[50px] min-w-full flex-col justify-center self-center   bg-none px-2 text-base"
                  }
                >
                  <section className="  m-auto flex flex-row">
                    {spell.S && <h3 className="">S</h3>}
                    {spell.M && <h3>M</h3>}
                    {spell.V && <h3>V</h3>}
                  </section>
                </section>
              ) : (
                <></>
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
