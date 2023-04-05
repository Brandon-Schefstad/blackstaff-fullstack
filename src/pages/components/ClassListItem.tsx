import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type ClassListItemProps = {
  name: string;
  i: number;
};
const ClassListItem = ({ name, i }: ClassListItemProps) => {
  return (
    <li
      className={
        "mx-8 border-b-2 border-solid border-black pt-2 hover:bg-black hover:text-white"
      }
      key={i}
    >
      <a className=" hover:text-white" href={`/classes/${name}`}>
        <section className="flex justify-between pr-4 align-middle">
          <span className="block px-2">{name}</span>
          <FontAwesomeIcon icon={faArrowRight} className={"my-auto"} />
        </section>
      </a>
    </li>
  );
};

export default ClassListItem;
