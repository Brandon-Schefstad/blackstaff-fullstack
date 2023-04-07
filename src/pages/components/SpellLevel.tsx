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
    <section
      className=" flex flex-col gap-2 text-center
    "
    >
      <button
        className="t mb-2 flex gap-2 px-4
                  text-center font-[amagro] text-xl hover:bg-black hover:text-white"
        onClick={() => setOpen(!open)}
      >
        <h1 className="" />
        {level === 0 ? "Cantrips" : `Level ${level}`}
        <h4>({spellList.length})</h4>
        {open ? (
          <FontAwesomeIcon icon={faCaretDown} />
        ) : (
          <FontAwesomeIcon icon={faCaretRight} />
        )}
      </button>
      {open ? (
        <ol>
          {spellList.map((spell, key) => {
            console.log(key);
            return <SpellComponent spell={spell} id={key} />;
          })}
        </ol>
      ) : (
        <></>
      )}
    </section>
  );
};

export default SpellLevel;
