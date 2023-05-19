import { type NextPage } from "next";
import ResponsiveImage from "~/components/ResponsiveImages";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

import desktopBg from "../../public/bg-skull-desktop.svg";
import mobileBg from "../../public/bg-skull-mobile.png";

const Home: NextPage = () => {
  return (
    <section className="flex h-full flex-col justify-evenly  overflow-y-hidden font-[amagro]">
      <NavBar />

      <div className="main  grid">
        <div className=" row-start-2 grid  bg-black px-4  py-4 text-center  text-sm text-white lg:bottom-auto lg:mx-6 lg:my-1 lg:border-2 lg:border-zinc-300 lg:text-6xl lg:tracking-wider">
          <span className="">Blackstaff's Spell Emporium</span>
        </div>
        <ResponsiveImage
          mobileSrc={mobileBg.src}
          desktopSrc={desktopBg.src}
          alt="A sketch of a skull, on top of a desk."
        />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
