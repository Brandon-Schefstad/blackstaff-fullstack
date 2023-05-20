import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <nav>
      <ul className="absolute bottom-0 flex w-full justify-start gap-4 border-b-2 border-solid  border-black bg-zinc-900 p-4 font-[Amagro] text-xs text-white md:gap-48 md:pl-16 ">
        <li>
          <a href="/" aria-label="Home">
            <FontAwesomeIcon icon={faHome} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/bschefstad" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/brandon-schefstad/"
            aria-label="Linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
