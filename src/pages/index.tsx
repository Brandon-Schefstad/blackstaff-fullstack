/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <section className="   bg-skullMobile bg-center bg-no-repeat md:bg-skull ">
      <div className="main max-w-screen  relative flex min-h-screen  flex-col justify-between  p-8 pt-12 pb-8  ">
        <div className="  relative z-10 bg-black py-4 pl-3 pr-8 text-left text-sm text-white sm:py-8 md:w-fit ">
          <h1 className="title sm:text-center sm:text-3xl md:inline md:text-4xl  lg:text-5xl">
            Blackstaff's Spell Emporium
          </h1>
        </div>

        {/* <ResponsiveImage
          mobileSrc={mobileBg.src}
          desktopSrc={desktopBg.src}
          alt="A sketch of a skull, on top of a desk."
        /> */}

        <section className="welcome  z-0 mx-auto flex h-[10rem] w-full flex-col gap-6 rounded-md border-2 border-solid border-primary bg-primaryLightest bg-opacity-90 px-8 py-8 text-primary   md:mb-12 md:mr-12 md:w-fit">
          <h2 className="text-center font-[Lato] font-bold italic sm:text-xl md:inline md:text-2xl  lg:text-3xl">
            A companion site to D&D's largest book of spells!
          </h2>
          <Link
            href="/classes"
            className=" buttonText mx-auto rounded-md bg-secondary px-2 py-1 md:text-lg lg:text-xl "
          >
            Enter
          </Link>
        </section>
      </div>
    </section>
  );
};

export default Home;
