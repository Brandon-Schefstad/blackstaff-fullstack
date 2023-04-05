import type { Spell } from "@prisma/client";
//@ts-ignore
const SpellComponent = (props) => {
  const spell: Spell = props.spell;
  if (spell) {
    return (
      <section key={spell.id} className="mb-4  p-4">
        <h1 className="text-xl font-bold"> {spell.name}</h1>
        <div className="flex gap-8">
          {/* <h2>Level: {spell.level}</h2> */}
          <h2>{spell.school} Spell</h2>
          <h2>
            Cast Time: {spell.castTime} {spell.ritual ? " (Ritual)" : ""}
            {spell.concentration ? " (Concentration)" : ""}
          </h2>
          <h2>Duration: {spell.duration}</h2>
        </div>
        <div className="flex gap-8">
          <h2>Components:</h2>

          <ul className="flex gap-8">
            {spell.S ? <li> S</li> : <></>}
            {spell.M ? <li>M ({spell.material})</li> : <></>}
            {spell.V ? <li> V </li> : <></>}
          </ul>
        </div>

        <section className="grid ">
          <p className=" m-auto max-w-[80ch] text-sm leading-6">
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
      </section>
    );
  } else {
    return <></>;
  }
};

export default SpellComponent;
