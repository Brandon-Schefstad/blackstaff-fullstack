import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const Footer = () => {
  return (
    <nav>
      <ul className="  flex w-full justify-start gap-4 border-b-2 border-solid border-black bg-zinc-900  p-4 font-[Amagro] text-xs text-white md:gap-48 md:pl-16 md:text-base lg:absolute lg:bottom-0 lg:text-lg">
        <li>
          <Link href="/" aria-label="Home">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/bschefstad" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/brandon-schefstad/"
            aria-label="Linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
