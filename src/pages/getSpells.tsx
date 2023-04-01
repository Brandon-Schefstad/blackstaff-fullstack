import { Spell } from "@prisma/client";
import { type NextPage } from "next";
import { useEffect, useState } from "react";

const SpellPages: NextPage = () => {
  const [data, setData] = useState([]);
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

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <ul>
          {data ? (
            data.map((spell: Spell) => (
              <li key={spell.id} className="mb-4 p-4">
                {/* {JSON.stringify(spell)} */}
                <h1 className="text-xl underline"> {spell.name}</h1>
                <div className="flex gap-8">
                  <h2>Level: {spell.level}</h2>
                  <h2>{spell.school}</h2>
                </div>
                <h2>{[spell.S, spell.M, spell.V]}</h2>
                <h2>Duration: {spell.duration} Minutes</h2>
                {spell.concentration ? <h2>Concentration: True</h2> : <></>}
                {spell.ritual ? <h2>Ritual: True</h2> : <></>}
                <h2 className="my-1">Description: </h2>
                <h3 className="text-sm">{spell.description}</h3>
                <h2 className="my-1">Higher Level Casting: </h2>
              </li>
            ))
          ) : (
            <></>
          )}
        </ul>
      )}
    </>
  );
};

export default SpellPages;
