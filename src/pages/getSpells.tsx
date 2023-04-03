import { Spell } from "@prisma/client";
import { type NextPage } from "next";
import { useEffect, useState } from "react";
import SpellComponent from "./components/SpellComponent";

const SpellPages: NextPage = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("All");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("/api/read/spells")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  function handleClick(name: string): void {
    fetch(`/api/read/spell/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setName(name);
        setLoading(false);
      });
  }
  return (
    <>
      <section className=" my-4 ml-16 flex gap-4">
        <button onClick={() => handleClick("Artificer")}>Artificer</button>
        <button onClick={() => handleClick("Bard")}>Bard</button>
        <button onClick={() => handleClick("Cleric")}>Cleric</button>
        <button onClick={() => handleClick("Druid")}>Druid</button>
        <button onClick={() => handleClick("Paladin")}>Paladin</button>
        <button onClick={() => handleClick("Ranger")}>Ranger</button>
        <button onClick={() => handleClick("Sorcerer")}>Sorcerer</button>
        <button onClick={() => handleClick("Warlock")}>Warlock</button>
        <button onClick={() => handleClick("Wizard")}>Wizard</button>
      </section>
      <h1>{name}</h1>
      {isLoading ? (
        <></>
      ) : (
        <ul className="m-auto w-[60%]">
          {data ? (
            data.map((spell: Spell) => <SpellComponent spell={spell} />)
          ) : (
            <></>
          )}
        </ul>
      )}
    </>
  );
};

export default SpellPages;
