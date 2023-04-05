import type { Spell } from "@prisma/client";
//@ts-ignore
const SpellComponent = (props) => {
  const spell: Spell = props.spell;
  const key = props.id;
  if (spell && key) {
    console.log(key);
    return (
      <li key={spell.id} className="mb-4  p-4">
        <h1 className=" text-2xl font-bold">
          {JSON.stringify(key)}. {spell.name}
        </h1>
        <section className="spell mx2 grid  gap-2 border-y-2 border-solid border-black">
          <div className="flex flex-col gap-2 lg:flex-row lg:gap-8">
            <h2>{spell.school} Spell</h2>
            <h2>
              Cast Time: {spell.castTime} {spell.ritual ? " (Ritual)" : ""}
              {spell.concentration ? " (Concentration)" : ""}
            </h2>

            <h2>Duration: {spell.duration}</h2>
          </div>
          <div className="flex flex-col  border-t-2 border-solid border-black md:gap-6 lg:gap-8 xl:gap-10">
            <h2>Components:</h2>
            <ul className=" gap-2 md:gap-4 lg:gap-6 xl:gap-8">
              {spell.S ? <li>- S</li> : <></>}
              {spell.M ? <li>- M ({spell.material})</li> : <></>}
              {spell.V ? <li>- V </li> : <></>}
            </ul>
          </div>
        </section>

        <section className="grid ">
          <p className=" text-md m-auto max-w-[50ch] px-2 pt-4 leading-6 lg:max-w-[90ch]">
            Description:
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
          </p>
        </section>
      </li>
    );
  } else {
    return <></>;
  }
};

export default SpellComponent;
