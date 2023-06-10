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
    <section className=" flex max-h-[380px]  flex-col gap-[2px]   ">
      <section
        className={
          font +
          ` description outline-6 overflow-y-scroll  bg-amber-100 bg-opacity-70 p-4 text-left indent-4 text-base leading-tight tracking-tighter  text-black outline outline-white focus:bg-opacity-95 focus:outline-4 focus:outline-lime-400 lg:max-w-[90ch] 
           ${
             spellDescription[1] && longCastTime
               ? "flex-grow-3 h-[320px] py-4"
               : spellDescription[1]
               ? "flex-grow-1 h-[325px]  py-4"
               : longCastTime
               ? "flex-grow-3 h-[350px]  py-4"
               : "flex-grow-3  h-full py-4"
           } `
        }
      >
        {spellDescription[0] ? (
          <p className="">
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
              "  description  flex-grow-2 h-[120px] overflow-y-scroll bg-amber-50 bg-opacity-80 p-2  text-left  indent-4 text-sm leading-tight  tracking-tight text-gray-800"
            }
          >
            <span className={font + " p-2"}>{spellDescription[1]}</span>
          </section>
        ) : (
          <button
            onClick={() => setHigherCast(true)}
            className={
              "   description  max-h-[125px] bg-amber-200    bg-opacity-30  py-3  text-center  text-sm font-bold leading-tight text-white "
            }
          >
            <span className={font + " p-2 "}>{"UpCast"}</span>
          </button>
        )
      ) : (
        <></>
      )}
    </section>
  );
};

export default SpellDescription;
