import { Spell } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SpellComponent from "./components/SpellComponent";

const classSheet = () => {
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
  });
  const [name, setName] = useState(router.query.name);
  useEffect(() => {
    if (!router.isReady) return;
    setName(router.query.name);
    fetch(`/api/read/spell/${router.query.name}`)
      .then((res) => res.json())
      .then((data) => {
        setSpells({
          0: data.filter((spell) => spell.level === "0"),
          1: data.filter((spell) => spell.level === "1st"),
          2: data.filter((spell) => spell.level === "2nd"),
          3: data.filter((spell) => spell.level === "3rd"),
          4: data.filter((spell) => spell.level === "4th"),
          5: data.filter((spell) => spell.level === "5th"),
          6: data.filter((spell) => spell.level === "6th"),
          7: data.filter((spell) => spell.level === "7th"),
          8: data.filter((spell) => spell.level === "8th"),
          9: data.filter((spell) => spell.level === "9th"),
        });
      });
  }, [router.isReady, router.query]);
  return (
    <>
      <section className=" my-4 ml-16 flex gap-4">
        {names.map((name, i) => {
          return (
            <Link key={i} passHref={true} replace={true} href={`/${name}`}>
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
                  {spells[key].map((spell: Spell) =>
                    spells[key].length ? (
                      <SpellComponent spell={spell} />
                    ) : (
                      <h1>None</h1>
                    )
                  )}
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

export default classSheet;
