/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Spell } from "@prisma/client";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Footer from "~/components/Footer";
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
  const [currentLevel, setCurrentLevel] = useState(startingLevel);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.value) {
      setCurrentLevel(event.currentTarget.value);
    }
  };

  return (
    <section className=" text-primary">
      <NavBar />
      <section className="flex flex-col gap-8 py-4 px-6 sm:gap-16 sm:px-24 sm:py-0 sm:pt-8">
        <section className="flex gap-4 ">
          <Link href={"/classes"}>Back</Link>
          <h1 className=" h3 tracking-wide md:text-3xl">{router.query.name}</h1>
        </section>

        <section className="levels grid grid-cols-5 gap-4 sm:flex sm:items-stretch sm:gap-0">
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
                  className={`buttonText rounded-lg border-2 border-solid py-2 font-bold sm:min-w-[4rem] sm:rounded-b-none sm:text-xl ${
                    level == currentLevel
                      ? " text-bold border-secondaryDark bg-secondaryDark text-primaryLight underline"
                      : "border-secondaryDark bg-secondary shadow-md  shadow-secondaryDark"
                  }`}
                >
                  {level === "0" ? "C" : level}
                </button>
              );
            })}
        </section>
      </section>
      <section className=" sm:px-24">
        <section className=" ">
          <section className="spellGuide grid grid-cols-3  justify-between gap-4 bg-primary px-2 py-4 text-primaryLightest sm:grid-cols-4 sm:text-xl md:text-xl lg:grid-cols-5">
            <span className="">Spell Name</span>
            <span className="text-center sm:text-left">Casting Time</span>
            <span className="text-right sm:text-left">Range</span>
            <span className="hidden text-left   lg:block">Duration</span>
            <span className="hidden text-left  sm:block ">School</span>
          </section>
          <SpellLevel
            /* @ts-ignore */
            spellList={levelHashMap[currentLevel]}
            level={currentLevel}
          />
        </section>
      </section>
      <Footer />
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
