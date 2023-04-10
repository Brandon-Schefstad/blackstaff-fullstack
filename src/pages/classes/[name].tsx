import { Spell } from "@prisma/client";
import { useRouter } from "next/router";
import { useState } from "react";
import NavBar from "../../components/Navbar";
import SpellLevel from "../../components/SpellLevel";
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

const ClassSheet = (levelHashMap: spellState) => {
  console.log(levelHashMap);

  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

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
              const spellList = levelHashMap[num];
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
      { params: { name: "Claric" } },
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
