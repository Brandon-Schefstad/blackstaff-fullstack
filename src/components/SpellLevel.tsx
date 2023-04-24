import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spell } from "@prisma/client";
import { useState } from "react";
import SpellComponent from "./SpellComponent";

type SpellLevelPropTypes = {
  level: number;
  spellList: Spell[];
};
const SpellLevel = ({ level: level, spellList }: SpellLevelPropTypes) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {spellList.length ? (
        <section
          className=" flex flex-col gap-2 text-center
    "
        >
          <button
            className="m-auto mb-2 flex gap-2 py-2 px-2 text-center
                  font-[amagro] text-xl hover:bg-black hover:text-white sm:w-[350px]"
            onClick={() => setOpen(!open)}
          >
            <h1 className="m-auto text-center">
              {" "}
              {level === 0 ? "Cantrips" : `Level ${level}`}{" "}
              {<span>({spellList.length})</span>}
              {open ? (
                <FontAwesomeIcon icon={faCaretDown} />
              ) : (
                <FontAwesomeIcon icon={faCaretRight} />
              )}
            </h1>
          </button>
          {open ? (
            <section className="carousel  w-screen overflow-x-scroll ">
              <ol className=" ml-12 flex gap-12">
                {spellList.map((spell: Spell, key) => {
                  return <SpellComponent spell={spell} id={key} />;
                })}
              </ol>
            </section>
          ) : (
            <></>
          )}
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default SpellLevel;
