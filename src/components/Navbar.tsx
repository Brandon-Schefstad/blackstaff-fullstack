import { type NextPage } from "next";

const NavBar: NextPage = () => {
  const liClass = `border-b-2 border-transparent hover:border-b-2 hover:border-solid hover:border-black`;
  return (
    <nav>
      <ul className="flex  w-full justify-end gap-10 border-b-2 border-solid border-black bg-zinc-900 p-4 font-[Amagro] text-xs text-white md:gap-48 md:pr-16 ">
        <li>
          <a className={liClass} href="/classes">
            Classes
          </a>
        </li>
        <li>
          <a className={liClass} href="/about">
            About
          </a>
        </li>
        <li>
          <a
            className={liClass}
            href="https://www.dmsguild.com/product/302120/The-Blackstaffs-Book-of-1000-Spells"
          >
            Purchase
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
