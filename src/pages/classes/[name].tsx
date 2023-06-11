/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Spell } from "@prisma/client";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import SpellLevel from "~/components/SpellLevel";
import NavBar from "../../components/Navbar";
import { handler2 } from "../api/read/spell";
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

const ClassSheet = (props: { levelHashMap: spellState }) => {
  const router = useRouter();
  const { levelHashMap }: { levelHashMap: spellState } = props;
  const startingLevel = levelHashMap["0"].length === 0 ? "1" : "0";
  const [level, setLevel] = useState(startingLevel);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.value) {
      setLevel(event.currentTarget.value);
    }
  };

  return (
    <section className=" text-primary">
      <NavBar />
      <section className="">
        <h1 className="  ">{router.query.name}</h1>

        {Object.keys(levelHashMap)
          .filter((level: string) => {
            //@ts-ignore
            return levelHashMap[level].length > 0;
          })
          .map((level) => {
            return (
              <button
                onClick={(e) => handleClick(e)}
                value={level}
                className=""
              >
                {level === "0" ? "Cantrips" : "Level " + level}
              </button>
            );
          })}
      </section>
      <section className="">
        <section className="">
          {/* @ts-ignore */}
          <SpellLevel spellList={levelHashMap[level]} level={level} />
        </section>
      </section>
    </section>
  );
};

export default ClassSheet;

export async function getStaticProps({ params }: { params: GetStaticProps }) {
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

  // Get external data from the file system, API, DB, etc.
  const data = await handler2(params.name);

  data.forEach((spell: Spell) => {
    //@ts-ignore
    levelHashMap[spell.level].push(spell);
  });

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: { levelHashMap },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { name: "Artificer" } },
      { params: { name: "Bard" } },
      { params: { name: "Cleric" } },
      { params: { name: "Druid" } },
      { params: { name: "Paladin" } },
      { params: { name: "Ranger" } },
      { params: { name: "Sorcerer" } },
      { params: { name: "Warlock" } },
      { params: { name: "Wizard" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}
