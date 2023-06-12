import { Spell } from "@prisma/client";
import { useState } from "react";

type SpellComponentTypes = {
  spell: Spell;
  id: number;
};

const SpellComponent = ({ spell }: SpellComponentTypes) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      key={spell.id}
      className={" ml-2 mr-3 border-b-2 border-solid border-primary py-1  "}
    >
      <button
        onClick={() => setOpen(!open)}
        className=" grid w-full grid-cols-3 items-center gap-2 bg-primaryLightest  "
      >
        <h2 className="  text-left text-primary ">{spell.name}</h2>
        <h2 className=" text-left text-primary">{spell.castTimeBase}</h2>
        <h2 className=" text-right text-primary">{spell.range}</h2>
      </button>
      {open && (
        <section className="bg-primaryLight px-6 pt-3 pb-6">
          <section className="border-2 border-solid border-primary bg-secondaryLight ">
            <section className="grid grid-cols-2 gap-4 border-b-2 border-solid border-primary px-3 py-2 ">
              <section className="flex flex-col">
                <span className="buttonText">Casting Time</span>
                <span>{spell.castTimeBase}</span>
              </section>
              <section className="flex flex-col">
                <span className="buttonText">Range</span>
                <span>{spell.range}</span>
              </section>
              <section className="flex flex-col">
                <span className="buttonText">Duration</span>
                <span>{spell.duration}</span>
              </section>

              <section className="flex flex-col">
                <span className="buttonText">School</span>
                <span>{spell.school}</span>
              </section>
              <section className="flex flex-col">
                <span className="buttonText">Damage</span>
                <span>Psychic</span>
              </section>

              <section className="flex flex-col">
                <span className="buttonText">Save</span>
                <span>CON</span>
              </section>
              <section className="flex flex-col">
                <span className="buttonText">Components</span>
                <span className="">
                  {spell.S && "S "}
                  {spell.M && "M "}
                  {spell.V && "V"}
                </span>
              </section>
              <section className="flex flex-col">
                <span className="buttonText">Materials</span>
                <span className="">{spell.material}</span>
              </section>
            </section>
            <section className="description flex flex-col gap-2 py-6 px-3 ">
              <h2 className="base-header">Description</h2>
              <p className="body-small">
                {spell.description
                  .split(String.fromCodePoint(61618))
                  .map((str: string, i: number) =>
                    i !== 0 ? (
                      <p className="decoration-dotted first-letter:text-lg first-letter:underline first-line:mt-4">
                        +{" "}
                        {str.split(" ").map((word) => {
                          const regexp = /[1-9]+d[0-9]+/gm;
                          return regexp.test(word) ? (
                            <span className="font-bold"> {word} </span>
                          ) : (
                            <>{word} </>
                          );
                        })}
                      </p>
                    ) : (
                      <>
                        {str.split(" ").map((word) => {
                          const regexp = /[1-9]+d[0-9]+/gm;
                          return regexp.test(word) ? (
                            <span className="font-bold"> {word} </span>
                          ) : (
                            <>{word} </>
                          );
                        })}
                      </>
                    )
                  )}
              </p>
              {spell.upCast && (
                <section className="mt-2 flex flex-col gap-2 ">
                  <p className="base-header">Upcasting:</p>
                  <p className="body-small">
                    {spell.upCast.split(" ").map((word) => {
                      const regexp = /[1-9]+d[0-9]+/gm;
                      return regexp.test(word) ? (
                        <span className="font-bold"> {word} </span>
                      ) : (
                        <>{word} </>
                      );
                    })}
                  </p>
                </section>
              )}
              <p className="body-xsmall">
                {spell.castTimeBaseExtended
                  ? `*${spell.castTimeBaseExtended}`
                  : ""}
                {spell.rangeExtended
                  ? `**${spell.rangeExtended.slice(0, -1)}.`
                  : ""}
              </p>
            </section>
          </section>
        </section>
      )}
    </li>
  );
};

export default SpellComponent;
