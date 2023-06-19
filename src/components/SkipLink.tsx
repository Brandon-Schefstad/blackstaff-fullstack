import useSkipLinks from "./UseSkipLinks";

interface LinkType {
  title: string;
  id: string;
}

const SkipLink = () => {
  const { skipLinks } = useSkipLinks();

  return (
    <ul className="">
      {skipLinks.map((link: LinkType) => {
        return (
          <li key={link.title}>
            <a
              className="skip-link-content block text-center font-bold"
              href={`#${link.id}`}
            >
              Go to {link.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SkipLink;
