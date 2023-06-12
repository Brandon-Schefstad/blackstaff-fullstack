import Link from "next/link";
type ClassListItemProps = {
  name: string;
  i: number;
};
const ClassListItem = ({ name, i }: ClassListItemProps) => {
  return (
    <li
      key={i}
      className={`  h-[90px] rounded-xl border-2 border-solid border-primary bg-primaryLight  text-center hover:bg-primary hover:text-primaryLight ${
        i === 8 ? "col-span-2  m-auto w-1/2" : ""
      }`}
    >
      <Link
        className=" grid h-[90px] items-center hover:text-white "
        href={`/classes/${name}`}
      >
        <span className="mobile-class-name block ">{name}</span>
      </Link>
    </li>
  );
};

export default ClassListItem;
