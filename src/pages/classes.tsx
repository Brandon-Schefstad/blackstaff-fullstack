import { type NextPage } from "next";
import Head from "next/head";
import SkipLink from "~/components/SkipLink";
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
    <div className=" text-black lg:min-h-screen ">
      <Head>
        <title>Classes</title>
      </Head>
      <SkipLink />
      <NavBar />
      <div
        data-skip-link="main"
        id="main"
        className="my-6 flex  flex-col gap-6 px-6 lg:px-24 lg:py-9"
      >
        <h1 className=" h3 tracking-wider md:text-base  lg:text-2xl ">
          Choose Your Class
        </h1>
        <ul className="grid grid-cols-2 gap-4  md:grid-cols-3">
          {names.map((name: string, i) => {
            return <ClassListItem name={name} key={i} />;
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Classes;
