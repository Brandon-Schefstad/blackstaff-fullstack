import { Spell } from "@prisma/client";
import { useEffect, useState } from "react";

type SpellComponentTypes = {
  spell: Spell;
  level: string;
  index: number;
};

const SpellComponent = ({ spell, level, index }: SpellComponentTypes) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    console.log(open);
  }, [level]);
  return (
    <li
      key={index}
      className={"  border-b-2 border-solid border-primary  sm:ml-0 sm:mr-0  "}
    >
      <button
        onClick={() => setOpen(!open)}
        className={` spellEntry  grid w-full grid-cols-3 items-center py-2 pl-2 pr-3  sm:grid-cols-4 md:py-6 md:px-2  md:text-xl lg:grid-cols-5 ${
          index % 2 === 0 ? "bg-primaryLightest" : "bg-primaryLight"
        }`}
      >
        <h2 className="  text-left  text-primary ">{spell.name}</h2>
        <h2 className="  text-left text-primary sm:text-left">
          {spell.castTimeExtended ? (
            <>{`${spell.castTimeBase}*`}</>
          ) : (
            <>{spell.castTimeBase}</>
          )}
        </h2>
        <h2 className="  text-right text-primary sm:text-left">
          {spell.rangeExtended ? <>{`${spell.range}**`}</> : spell.range}
        </h2>
        <h2 className="  hidden text-left text-primary lg:block">
          {spell.duration}
        </h2>
        <h2 className="   hidden text-left text-primary sm:block">
          {spell.school}
        </h2>
      </button>
      {open && (
        <section
          className={`px-6 pt-3 pb-6 sm:px-16 md:px-32 ${
            index % 2 === 0 ? "bg-primaryLightest" : "bg-primaryLight"
          }`}
        >
          <section className="border-2 border-solid border-primary bg-secondaryLight ">
            <section className="grid grid-cols-2 gap-4 border-b-2 border-solid border-primary px-4 py-2 sm:grid-cols-3 ">
              <section className="flex flex-col">
                <span className="buttonTextCormorant md:text-xl ">
                  Casting Time
                </span>
                <span>{spell.castTimeBase}</span>
              </section>
              <section className="flex flex-col text-right sm:text-left">
                <span className="buttonTextCormorant md:text-xl">Range</span>
                <span>{spell.range}</span>
              </section>
              <section className="flex flex-col">
                <span className="buttonTextCormorant md:text-xl">Duration</span>
                <span>{spell.duration}</span>
              </section>

              <section className="flex flex-col text-right sm:text-left">
                <span className="buttonTextCormorant md:text-xl">School</span>
                <span>{spell.school}</span>
              </section>

              <section className="flex flex-col">
                <span className="buttonTextCormorant md:text-xl">
                  Components
                </span>
                <span className="">
                  {spell.S && "S "}
                  {spell.M && "M "}
                  {spell.V && "V"}
                </span>
              </section>
              <section className="flex flex-col text-right sm:text-left">
                {spell.material && (
                  <>
                    {" "}
                    <span className="buttonTextCormorant md:text-xl">
                      Materials
                    </span>
                    <span className="">{spell.material}</span>
                  </>
                )}
              </section>
            </section>
            <section className="description flex flex-col gap-2 py-6 px-4 ">
              <h2 className="buttonTextCormorant font-[Cormorant] md:text-xl">
                Description
              </h2>
              <p className="body-small leading-5 sm:text-lg">
                {spell.effect
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
                  <p className="buttonTextCormorant font-[Cormorant] md:text-xl ">
                    Upcasting
                  </p>
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
              <p className="body-xsmall ">
                {spell.castTimeExtended ? `*${spell.castTimeExtended}` : ""}
              </p>
              <p className="body-xsmall leading-1">
                {spell.rangeExtended ? `**${spell.rangeExtended}.` : ""}
              </p>
            </section>
          </section>
        </section>
      )}
    </li>
  );
};

export default SpellComponent;
