import { type NextPage } from "next";
import ClassListItem from "../components/ClassListItem";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

const Classes: NextPage = () => {
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
    <div className=" font-[amagro] text-black">
      <NavBar />
      <div className=" grid  pt-8 ">
        <h1 className="text-center text-2xl  ">Select Your Class</h1>
        <ul className="grid gap-12 px-8  py-8 text-sm sm:grid-cols-3 sm:justify-between sm:gap-4 sm:text-lg lg:px-28">
          {names.map((name: string, i) => {
            return <ClassListItem name={name} i={i} />;
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Classes;
