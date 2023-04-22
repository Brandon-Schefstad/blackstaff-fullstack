import { Spell } from "@prisma/client";
import { Inconsolata } from "next/font/google";
type SpellComponentTypes = {
  spell: Spell;
  id: number;
};

function determineSpellColor(spellSchool: string, value: string) {
  const spellColorHash = {
    abjuration: "bg-blue-",
    alteration: "bg-green-",
    conjuration: "bg-yellow-",
    divination: "bg-purple-",
    enchantment: "bg-slate-",
    evocation: "bg-red-",
    illusion: "bg-pink-",
    invocation: "bg-teal-",
    necromancy: "bg-orange-",
    transmutation: "bg-rose-",
  };
  //@ts-ignore
  return spellColorHash[spellSchool] + value;
}
const inconsolata = Inconsolata({ subsets: ["latin"] });
const SpellComponent = ({ spell, id }: SpellComponentTypes) => {
  const spellDescription = spell.description.split("At Higher Levels.");
  const spellSchool = spell.school.toLowerCase();
  const spellColor100: string = determineSpellColor(spellSchool, "100");
  const spellColor200: string = determineSpellColor(spellSchool, "200");
  const spellColor300: string = determineSpellColor(spellSchool, "300");
  const spellColor400: string = determineSpellColor(spellSchool, "400");
  // console.log(spell.name, spell.school, [
  //   spellColor100,
  //   spellColor200,
  //   spellColor300,
  //   spellColor400,
  // ]);
  return (
    <section className="max-h-[400px] min-w-[300px] overflow-y-scroll border-2 border-solid border-black">
      {spell ? (
        <li
          key={spell.id}
          className={inconsolata.className + " mb-4 grid gap-2  p-4 text-xs"}
        >
          <h1 className="  ml-2  text-center font-[Amagro] text-lg ">
            {JSON.stringify(id + 1)}. {spell.name ? spell.name : "None"}
          </h1>
          <h3 className="">{spell.school}</h3>

          <section className={spellColor100}>
            <div
              className={
                "grid grid-cols-2 items-center gap-2 text-sm  lg:flex-row "
              }
            >
              {" "}
              <section className="col-span-2 flex flex-col">
                {spell.concentration && <h2>Concentration</h2>}
                <h2>{spell.duration}</h2>
                <h2>{spell.spellRange}</h2>
                <span>{spell.castTime}</span>
              </section>
            </div>
          </section>
          <span className={spellColor200}>he</span>
          <section className="grid ">
            <section
              className={
                spellColor200 +
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
            <section className={"p-2" + spellColor300}>
              {spellDescription[1]}
            </section>
          )}
          {spell.quote ? (
            <section className={" p-2" + spellColor300}>{spell.quote}</section>
          ) : (
            <></>
          )}
          <div
            className={
              " grid justify-center border-solid border-black p-2" +
              spellColor300
            }
          >
            <section className="flex flex-col">
              <section className="m-auto flex gap-1">
                ({spell.S && <h3>S</h3>}
                {spell.M && <h3> M</h3>}
                {spell.V && <h3> V</h3>})
              </section>
              <h3> {spell.M && <> Material: {spell.material} </>}</h3>

              {spell.ritual && <h2>Ritual</h2>}
            </section>
          </div>
        </li>
      ) : (
        <></>
      )}
    </section>
  );
};

export default SpellComponent;
