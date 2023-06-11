import { type NextPage } from "next";
import Link from "next/link";
const NavBar: NextPage = () => {
  const liClass = `border-b-2 border-transparent hover:border-b-2 hover:border-solid hover:border-black`;
  return (
    <nav>
      <ul className=" mobile-nav flex  w-full justify-end gap-10 border-b-2 border-solid border-black bg-zinc-900 p-4 text-xs text-white md:gap-48 md:pr-16 ">
        <li>
          <Link className={liClass} href="/classes">
            Classes
          </Link>
        </li>
        <li>
          <Link className={liClass} href="/about">
            About
          </Link>
        </li>
        <li>
          <Link
            className={liClass}
            href="https://www.dmsguild.com/product/302120/The-Blackstaffs-Book-of-1000-Spells"
          >
            Purchase
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
