import type { Spell } from "@prisma/client";
//@ts-ignore
const SpellComponent = (props) => {
  const spell: Spell = props.spell;
  if (spell) {
    return (
      <section key={spell.id} className="mb-4  p-4">
        <h1 className="text-xl font-bold"> {spell.name}</h1>
        <div className="flex gap-8">
          <h2>Level: {spell.level}</h2>
          <h2>{spell.school}</h2>
        </div>
        <h2>{[spell.S, spell.M, spell.V]}</h2>
        <h2> {spell.duration}</h2>
        {spell.concentration ? <h2>Concentration</h2> : <></>}
        {spell.ritual ? <h2>Ritual</h2> : <></>}
        <section className="grid ">
          <p className="text-sm leading-6">
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
