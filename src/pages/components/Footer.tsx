import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="sticky bottom-0 grid min-w-full grid-cols-7 bg-black  px-8 py-2  text-xs text-white ">
      <a className="col-span-5 flex w-full flex-col text-center" href="/">
        <span className="">Blackstaff's Spell</span>
        <span> Emporium</span>
      </a>
      <section className="socials m-auto flex w-full justify-end gap-2">
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faLinkedin} />
        {/* <span className="font-sans">Copyright &copy;</span> */}
      </section>
    </div>
  );
};

export default Footer;
