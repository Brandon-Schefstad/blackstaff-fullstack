import { Spell } from "@prisma/client";
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

const ClassSheet = (props: any) => {
  const router = useRouter();
  const { levelHashMap }: { levelHashMap: spellState } = props;
  const [level, setLevel] = useState("0");
  const [drawer, setDrawer] = useState(false);
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLevel(event.target.value);
  };
  return (

    <section className="overflow-x-hidden text-black ">
      <NavBar />
      <section className="relative ">
        <h1 className=" mt-4 text-center font-[amagro] text-3xl font-bold   underline lg:text-6xl">
          {router.query.name}
        </h1>
        <h1 className="mb-8  text-center font-[amagro] text-xl font-bold  lg:text-6xl">
          {level === "0" ? "Cantrips" : `Level ${level}`}
        </h1>
        <select
          name="level"
          id="level"
          className="m-auto mb-8 block  w-24 rounded-lg p-2 text-center text-white"
          onChange={(e) => handleOptionChange(e)}
          value={level}
        >
          {Object.keys(levelHashMap)
            .filter((level) => {
              //@ts-ignore
              return levelHashMap[level].length;
            })
            .map((level) => {
              return (
                <option value={level} className="">
                  {level === "0" ? "Cantrips" : "Level " + level}
                </option>

              );
            })}
        </select>
        <section className="chooseSpell  relative min-w-full gap-12">
          <section className="artBoard min-h-screen min-w-full   border-y-2 border-zinc-800 bg-zinc-600  text-white">
            {/* @ts-ignore */}
            <SpellLevel spellList={levelHashMap[level]} level={level} />
          </section>
        </section>
      </section>
    </section>
  );
};

export default ClassSheet;

export async function getStaticProps({ params }: any) {
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
