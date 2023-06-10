import { Spell } from "@prisma/client";
import Image from "next/image";
import concentrationLogo from "../../public/concentration.svg";
import ritualLogo from "../../public/ritual.svg";

const SpellFooter = ({ spell }: { spell: Spell }) => {
  return (
    <section
      className={` absolute bottom-0 grid min-w-full  grid-cols-3  items-center  justify-center rounded-b-lg  bg-[#1B0000] text-center text-amber-400
          `}
    >
      {spell.ritual && (
        <div className="tooltip" data-tip="Ritual">
          <Image
            src={ritualLogo}
            alt={"Ritual"}
            height={25}
            width={25}
            className="col-start-1 m-auto  self-center"
          />
        </div>
      )}

      {spell.concentration && (
        <div className="tooltip" data-tip="Concentration">
          <Image
            src={concentrationLogo}
            // height={25}
            width={25}
            className="col-start-2 m-auto self-center"
            alt={"Concentration"}
          />
        </div>
      )}
      {spell.S || spell.M || spell.V ? (
        <section
          className={
            " col-start-3  grid min-h-[45px] min-w-full items-center justify-center font-bold"
          }
        >
          <div>
            <section className="  m-auto flex flex-row">
              {spell.S && <h3 className="">S</h3>}
              {spell.M && (
                <h3 tabIndex={0} className="tooltip" data-tip={spell.material}>
                  M
                </h3>
              )}
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
