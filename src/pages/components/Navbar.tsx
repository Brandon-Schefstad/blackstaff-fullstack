import { type NextPage } from "next";

const NavBar: NextPage = () => {
  return (
    <nav>
      <ul className="flex w-full justify-evenly pb-10">
        <a href="/classes">
          <li>Classes</li>
        </a>
        <a href="/about">
          <li>About</li>
        </a>
        <a href="https://www.dmsguild.com/product/302120/The-Blackstaffs-Book-of-1000-Spells">
          <li>Purchase</li>
        </a>
      </ul>
    </nav>
  );
};

export default NavBar;
