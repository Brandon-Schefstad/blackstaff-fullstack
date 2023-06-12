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
    <div className="   text-black">
      <NavBar />
      <div className="mt-6 grid gap-6 px-6 ">
        <h1 className=" font-[Lato]  ">Select Your Class</h1>
        <ul className="grid grid-cols-2 gap-4">
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
