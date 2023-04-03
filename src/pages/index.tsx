import { type NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
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

  return (
    <section className="pt-8 pl-8 font-[amagro]">
      <h1 className="text-2xl">Blackstaff's Spell Emporium</h1>
      <section className="grid grid-cols-4 gap-8 p-8 ">
        {names.map((nameOfClass: string, i: number) => (
          <Link href={nameOfClass}>
            <section
              className="grid h-[250px] justify-center rounded-lg border-2 border-solid border-black align-middle"
              key={i}
            >
              {nameOfClass}
            </section>
          </Link>
        ))}
      </section>

      <Link href="/getSpells">Click me </Link>
    </section>
  );
};

export default Home;
