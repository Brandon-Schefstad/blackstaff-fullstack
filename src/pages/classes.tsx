import { type NextPage } from "next";
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
    <>
      <NavBar />
      <div className=" grid  pt-8 ">
        <h1 className="text-center text-2xl  ">Select Your Class</h1>
      </div>
      <Footer />
    
    </>
  );
};

export default Classes;
