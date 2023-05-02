import { useState } from "react";

const SpellDescription = ({
  font,
  spellDescription,
  longCastTime,
}: {
  font: string;
  spellDescription: string[];
  longCastTime: boolean;
}) => {
  const [higherCast, setHigherCast] = useState(false);
  return (

    <section className=" flex max-h-[490px] flex-col gap-2 p-3">

      <section
        className={
          font +
          ` description  outline-6  overflow-y-scroll bg-amber-100 bg-opacity-70 p-4 text-left indent-4 text-base leading-tight text-black outline outline-white lg:max-w-[90ch]
           ${
             spellDescription[1] && longCastTime
               ? "max-h-[270px]"
               : spellDescription[1]
               ? "max-h-[385px]"

               : longCastTime
               ? "max-h-[370px]"

               : "max-h-full"
           } `
        }
      >
        {spellDescription[0] ? (

          <p>

            {spellDescription[0]
              //this creates lists!  
              //
              .split(String.fromCodePoint(61618))
              .map((str: string, i: number) =>
                i !== 0 ? (

                  <p className="first-letter:underne decoration-dotted first-letter:text-lg first-line:mt-4">
                    + {str}
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

        ) : (
          <></>
        )}
      </section>
      {spellDescription[1] ? (
        higherCast ? (
          <section
            onClick={() => setHigherCast(false)}
            className={
              "  description  max-h-[90px]  overflow-y-scroll bg-amber-50 bg-opacity-90 p-2 text-left  indent-4 text-sm leading-tight text-gray-800"
            }
          >
            <span className={font + " p-2"}>{spellDescription[1]}</span>
          </section>
        ) : (
          <section
            onClick={() => setHigherCast(true)}
            className={
              "   description  max-h-[125px]   bg-amber-50 bg-opacity-90 p-2 text-left  indent-4 text-sm leading-tight text-gray-800"
            }
          >
            <span className={font + " p-2"}>{"UpCast"}</span>
          </section>
        )
      ) : (
        <></>
      )}
    </section>
  );
};

export default SpellDescription;
