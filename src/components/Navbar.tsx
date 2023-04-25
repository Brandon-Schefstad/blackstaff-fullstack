import { type NextPage } from "next";

const NavBar: NextPage = () => {
  const liClass = `border-b-2 border-transparent hover:border-b-2 hover:border-solid hover:border-black`;
  return (
    <nav>
      <ul className="flex w-full justify-evenly bg-white pb-6 font-[Amagro] text-xs">
        <a className={liClass} href="/classes">
          <li>Classes</li>
        </a>
        <a className={liClass} href="/about">
          <li>About</li>
        </a>
        <a
          className={liClass}
          href="https://www.dmsguild.com/product/302120/The-Blackstaffs-Book-of-1000-Spells"
        >
          <li>Purchase</li>
        </a>
      </ul>
    </nav>
  );
};

export default NavBar;
