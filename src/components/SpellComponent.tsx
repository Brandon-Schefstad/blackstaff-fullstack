import { Spell } from "@prisma/client";
type SpellComponentTypes = {
  spell: Spell;
  id: number;
};
const SpellComponent = ({ spell, id }: SpellComponentTypes) => {
  return (
    <section className=" max-h-[600px] min-w-[400px] overflow-y-scroll border-4 border-solid border-black">
      {spell ? (
        <li key={spell.id} className="mb-4  p-4">
          <h1 className=" ml-2 pb-2  text-center text-2xl font-bold">
            {JSON.stringify(id + 1)}. {spell.name ? spell.name : "None"}
          </h1>
          <section className="spell mx-2  grid gap-2 border-y-2 border-solid border-black">
            <div className="grid grid-cols-2 items-center gap-2 py-2 lg:flex-row lg:gap-8">
              <h2>{spell.school}</h2>
              <h2>{spell.duration}</h2>
              <h2 className="col-span-2">
                Cast Time: {spell.castTime} {spell.ritual ? " (Ritual)" : ""}
                {spell.concentration ? " (Concentration)" : ""}
              </h2>
            </div>
            <div className="flex flex-col justify-center gap-2 border-t-2 border-solid border-black py-2 pl-2">
              <section className="m-auto flex gap-1">
                {/* <h2 className="">Components:</h2> */}(
                {spell.S && <h3>S</h3>}
                {spell.M && <h3> M</h3>}
                {spell.V && <h3> V</h3>})
              </section>
              <h3> {spell.M && <> Material: {spell.material} </>}</h3>
            </div>
          </section>

          <section className="grid ">
            <section className=" text-md m-auto max-w-[50ch] px-2 pt-4 text-left  indent-3 lg:max-w-[90ch]">
              {spell.description
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
                )}
            </section>
          </section>
          {spell.quote ? (
            <section className="mt-4 border-t-4 border-solid border-red-600 pt-4">
              {spell.quote}
            </section>
          ) : (
            <></>
          )}
        </li>
      ) : (
        <></>
      )}
    </section>
  );
};

export default SpellComponent;
