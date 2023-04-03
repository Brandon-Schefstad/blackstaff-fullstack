import { Spell } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SpellComponent from "./components/SpellComponent";

const ClassSheet = () => {
  const names = [
    "Artificer",
    "Bard",
    "Cleric",
    "Druid",
    "Paladin",
    "Ranger",
    "Sorcerer",
    "Warlock",
    "Wizard",
  ];
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
          0: data
            .filter((spell: Spell) => spell.level === "0")
            .sort((a: Spell, b: Spell) => (a.name > b.name ? 1 : -1)),
          1: data
            .filter((spell: Spell) => spell.level === "1st")
            .sort((a: Spell, b: Spell) => (a.name > b.name ? 1 : -1)),
          2: data
            .filter((spell: Spell) => spell.level === "2nd")
            .sort((a: Spell, b: Spell) => (a.name > b.name ? 1 : -1)),
          3: data
            .filter((spell: Spell) => spell.level === "3rd")
            .sort((a: Spell, b: Spell) => (a.name > b.name ? 1 : -1)),
          4: data
            .filter((spell: Spell) => spell.level === "4th")
            .sort((a: Spell, b: Spell) => (a.name > b.name ? 1 : -1)),
          5: data
            .filter((spell: Spell) => spell.level === "5th")
            .sort((a: Spell, b: Spell) => (a.name > b.name ? 1 : -1)),
          6: data
            .filter((spell: Spell) => spell.level === "6th")
            .sort((a: Spell, b: Spell) => (a.name > b.name ? 1 : -1)),
          7: data
            .filter((spell: Spell) => spell.level === "7th")
            .sort((a: Spell, b: Spell) => (a.name > b.name ? 1 : -1)),
          8: data
            .filter((spell: Spell) => spell.level === "8th")
            .sort((a: Spell, b: Spell) => (a.name > b.name ? 1 : -1)),
          9: data
            .filter((spell: Spell) => spell.level === "9th")
            .sort((a: Spell, b: Spell) => (a.name > b.name ? 1 : -1)),
        });
      });
  }, [router.isReady, router.query]);
  return (
    <>
      <section className=" my-4 ml-16 flex gap-4">
        {names.map((name, i) => {
          return (
            <Link key={i} passHref={true} replace={true} href={"/" + name}>
              {name}
            </Link>
          );
        })}
      </section>
      <section>
        {spells ? (
          <section>
            {Object.keys(spells).map((key) => (
              <>
                {" "}
                <h1 className="text-center font-[amagro] text-2xl underline">
                  {key === "0" ? "Cantrips" : key}
                </h1>
                <section className="grid ">
                  {
                    //@ts-ignore
                    spells[key].map((spell: Spell) =>
                      //@ts-ignore
                      spells[key].length ? (
                        <SpellComponent spell={spell} />
                      ) : (
                        <h1>None</h1>
                      )
                    )
                  }
                </section>
              </>
            ))}
          </section>
        ) : (
          <></>
        )}
      </section>
    </>
  );
};

export default ClassSheet;
