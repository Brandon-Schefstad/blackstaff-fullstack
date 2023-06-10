import { Spell } from "@prisma/client";
import Image from "next/image";
import castTimeLogo from "../../public/castTime.svg";
import durationLogo from "../../public/duration.svg";
import rangeLogo from "../../public/range.svg";

const SpellStats = ({
  spell,
  spellColor,
}: {
  spell: Spell;
  spellColor: string;
}) => {
  const spellBlockStyle =
    "flex flex-col justify-center bg-amber-100 bg-opacity-90 px-2 mx-2 text-base  ";

  return (
    <>
      <section className={" py-4 " + spellColor + "-box"}>
        <section
          className={
            spellBlockStyle +
            " grid grid-cols-4 items-center gap-[6px] p-2  text-center  text-sm  text-gray-900 outline outline-2 outline-black"
          }
        >
          <Image
            src={durationLogo}
            height={20}
            className=" m-auto"
            alt="duration"
          />
          <h2 className="col-span-3">{spell.duration}</h2>
          <Image src={rangeLogo} height={20} className="m-auto " alt="range" />
          <h2 className={" col-span-3"}>{spell.spellRange}</h2>
          <Image
            src={castTimeLogo}
            height={20}
            className=" m-auto"
            alt="casting time"
          />
          <h2 className="col-span-3">{spell.castTime}</h2>
        </section>
      </section>
    </>
  );
};

export default SpellStats;
