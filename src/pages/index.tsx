/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type NextPage } from "next";
import Link from "next/link";
import ResponsiveImage from "~/components/ResponsiveImages";
import desktopBg from "../../public/bg-skull-desktop.svg";
import mobileBg from "../../public/bg-skull-mobile.png";

const Home: NextPage = () => {
  return (
    <section className=" min-h-[700px] ">
      <div className="main  flex min-h-screen flex-col justify-between  p-8">
        <div className="  relative z-10 bg-black py-4 pl-3 pr-8 text-left text-sm text-white ">
          <h1 className="title ">Blackstaff's Spell Emporium</h1>
        </div>
        <ResponsiveImage
          mobileSrc={mobileBg.src}
          desktopSrc={desktopBg.src}
          alt="A sketch of a skull, on top of a desk."
        />
        <section className="welcome z-0 mx-auto flex h-[10rem] w-full flex-col justify-between gap-4 border-2 border-solid border-primary bg-primaryLightest px-8 py-8 text-primary">
          <h2 className="text-center font-[Lato] font-bold italic">
            A companion site to D&D's largest book of spells!
          </h2>
          <Link
            href="/classes"
            className=" buttonText mx-auto rounded-md bg-secondary px-2 py-1 "
          >
            Enter
          </Link>
        </section>
      </div>
    </section>
  );
};

export default Home;
