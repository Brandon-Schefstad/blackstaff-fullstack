import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="sticky bottom-0 grid min-w-full grid-cols-7 bg-black  px-8 py-2  text-xs text-white ">
      <section className="socials m-auto flex w-full justify-end gap-2">
        <FontAwesomeIcon icon={faHome} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faLinkedin} />
      </section>
    </div>
  );
};

export default Footer;
