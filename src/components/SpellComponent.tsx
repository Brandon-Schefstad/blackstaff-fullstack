import { Spell } from "@prisma/client";
import { Inconsolata } from "next/font/google";
type SpellComponentTypes = {
  spell: Spell;
  id: number;
};
const inconsolata = Inconsolata({ subsets: ["latin"] });
const SpellComponent = ({ spell, id }: SpellComponentTypes) => {
  const spellDescription = spell.description.split("At Higher Levels.");
  console.log(spellDescription[0]);
  console.log(spellDescription[1]);
  return (
    <section className="  min-w-[300px]  border-2 border-solid border-black">
      {spell ? (
        <li
          key={spell.id}
          className={inconsolata.className + " mb-4 grid p-4 text-xs"}
        >
          <h1 className=" ml-2 text-center  font-[Amagro] text-lg ">
            {JSON.stringify(id + 1)}. {spell.name ? spell.name : "None"}
          </h1>
          <h3>{spell.school}</h3>

          <section className="spell mx-2 grid ">
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

          <section className="grid gap-4 ">
            <section className=" m-auto max-w-[50ch] px-2 pt-4 text-left indent-3  text-sm lg:max-w-[90ch]">
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
            <section className="">{spellDescription[1]}</section>
          </section>
          {spell.quote ? (
            <section className="mt-4 bg-red-100  p-2">{spell.quote}</section>
          ) : (
            <></>
          )}
          <div className=" grid justify-center border-solid border-black  pl-2">
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
