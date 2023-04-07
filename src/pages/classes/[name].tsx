import { Spell } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import SpellLevel from "../components/SpellLevel";

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
  const [loaded, setLoaded] = useState(false);
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

  const levelHashMap = {
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
  };
  useEffect((): void => {
    if (!router.isReady) return;
    fetch(`/api/read/spell/${router.query.name}`)
      .then((res) => res.json())
      .then((data: Spell[]) => {
        data.forEach((spell) => {
          //@ts-ignore
          levelHashMap[spell.level].push(spell);
        });
      })
      .then(() => {
        setSpells(levelHashMap);
        setLoaded(true);
      });
  }, [router.isReady, router.query]);

  return (
    <>
      <NavBar />
      <section>
        <h1 className="mb-12 text-center font-[amagro] text-3xl">
          {router.query.name}
        </h1>
        {loaded ? (
          <section className="m-auto flex flex-col">
            {["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => {
              //@ts-ignore
              const spellList = spells[num];
              {
                return spellList.length > 0 ? (
                  <div className="flex justify-center ">
                    <SpellLevel
                      level={Number(num)}
                      spellList={spellList ? spellList : []}
                    />
                  </div>
                ) : (
                  <></>
                );
              }
            })}{" "}
          </section>
        ) : (
          <></>
        )}
      </section>
    </>
  );
};

export default ClassSheet;
