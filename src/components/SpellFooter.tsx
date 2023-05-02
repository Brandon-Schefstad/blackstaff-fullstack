import { Spell } from "@prisma/client";
import Image from "next/image";
import concentrationLogo from "../../public/concentration.svg";
import ritualLogo from "../../public/ritual.svg";

const SpellFooter = ({ spell }: { spell: Spell }) => {
  return (
    <section
      className={` absolute bottom-0 grid min-w-full  grid-cols-3  items-center  justify-center rounded-b-lg  text-center text-zinc-900  ${
        spell.ritual || spell.concentration || spell.S || spell.M || spell.V
          ? "bg-white "
          : ""
      }
          `}
    >
      {spell.ritual && (
        <div className="tooltip" data-tip="Ritual">
          <Image
            src={ritualLogo}
            alt={"Ritual"}
            height={35}
            width={35}
            className="col-start-1 m-auto  self-center"
          />
        </div>
      )}

      {spell.concentration && (
        <div className="tooltip" data-tip="Concentration">
          <Image
            src={concentrationLogo}
            // height={35}
            width={35}
            className="col-start-2 m-auto self-center"
            alt={"Concentration"}
          />
        </div>
      )}
      {spell.S || spell.M || spell.V ? (
        <section
          className={
            " col-start-3  grid min-h-[50px] min-w-full items-center justify-center font-bold"
          }
        >
          <div className="tooltip" data-tip={spell.material}>
            <section className="  m-auto flex flex-row">
              {spell.S && <h3 className="">S</h3>}
              {spell.M && <h3>M</h3>}
              {spell.V && <h3>V</h3>}
            </section>
          </div>
        </section>
      ) : (
        <></>
      )}
    </section>
  );
};

export default SpellFooter;