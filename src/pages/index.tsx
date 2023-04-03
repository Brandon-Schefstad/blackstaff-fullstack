import { ClassDescription } from "@prisma/client";
import { type NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("/api/read/class")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="pt-8 pl-8 font-[amagro]">
      {isLoading ? (
        <></>
      ) : (
        <>
          <h1 className="text-2xl">Blackstaff's Spell Emporium</h1>
          <section className="grid grid-cols-4 gap-8 p-8 ">
            {data ? (
              data.map((classDescription: ClassDescription) => (
                <Link href={classDescription.name}>
                  <section
                    className="grid h-[250px] justify-center rounded-lg border-2 border-solid border-black align-middle"
                    key={classDescription.id}
                  >
                    {classDescription.name}
                  </section>
                </Link>
              ))
            ) : (
              <></>
            )}
          </section>
        </>
      )}
      <Link href="/getSpells">Click me </Link>
    </section>
  );
};

export default Home;
