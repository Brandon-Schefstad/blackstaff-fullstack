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
        " grid items-center border-b-2 border-solid border-black bg-slate-300 pt-2 hover:bg-black hover:text-white sm:h-[100px]"
      }
      key={i}
    >
      <a className=" hover:text-white" href={`/classes/${name}`}>
        <section className="flex justify-between  px-4 pr-4 align-middle sm:flex ">
          <span className="block  sm:text-right">{name}</span>
          <FontAwesomeIcon icon={faArrowRight} className={"my-auto"} />
        </section>
      </a>
    </li>
  );
};

export default ClassListItem;
