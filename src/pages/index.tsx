import { type NextPage } from "next";
import Image from "next/image";
import bgmobile from "../../public/bg-skull-mobile.png";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <section className="flex h-full flex-col justify-evenly  font-[amagro]">
      <NavBar />

      <div className="main">
        <div className=" absolute bottom-[18%] grid min-w-full bg-black px-4  py-4 text-center  text-sm text-white ">
          <span className="">Blackstaff's Spell Emporium</span>
        </div>
        <Image src={bgmobile} alt={"Sketch of skull on a large book"} />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
