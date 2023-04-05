import { Spell } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import SpellSection from "../components/SpellSection";

const ClassSheet = () => {
  interface spellState {
    "0": Spell[];
    "1": Spell[];
    "2": Spell[];
    "3": Spell[];
    "4": Spell[];
    "5": Spell[];
    "6": Spell[];
    "7": Spell[];
    "8": Spell[];
    "9": Spell[];
  }
  const router = useRouter();
  const [spells, setSpells] = useState({
    "0": [],
    "1": [],
    "2": [],
    "3": [],
    "4": [],
    "5": [],
    "6": [],
    "7": [],
    "8": [],
    "9": [],
  } as spellState);

  useEffect((): void => {
    if (!router.isReady) return;

    fetch(`/api/read/spell/${router.query.name}`)
      .then((res) => res.json())
      .then((data: Spell[]) => {
        setSpells({
          0: data.filter((spell: Spell) => spell.level === "0"),
          1: data.filter((spell: Spell) => spell.level === "1st"),
          2: data.filter((spell: Spell) => spell.level === "2nd"),
          3: data.filter((spell: Spell) => spell.level === "3rd"),
          4: data.filter((spell: Spell) => spell.level === "4th"),
          5: data.filter((spell: Spell) => spell.level === "5th"),
          6: data.filter((spell: Spell) => spell.level === "6th"),
          7: data.filter((spell: Spell) => spell.level === "7th"),
          8: data.filter((spell: Spell) => spell.level === "8th"),
          9: data.filter((spell: Spell) => spell.level === "9th"),
        });
      });
  }, [router.isReady, router.query]);
  return (
    <>
      <NavBar />
      <section>
        <h1 className="mb-12 text-center font-[amagro] text-3xl">
          {router.query.name}
        </h1>
        {spells ? (
          <section>
            {Object.keys(spells).map((num) => {
              return (
                <>
                  <h1 className="mt-8 text-center font-[amagro] text-xl">
                    {num === "0" ? "Cantrips" : `Level ${num}`}
                  </h1>
                  <SpellSection spells={spells[num]} />
                </>
              );
            })}
          </section>
        ) : (
          <></>
        )}
      </section>
    </>
  );
};

export default ClassSheet;
