import Link from "next/link";
type ClassListItemProps = {
  name: string;
  i: number;
};
const ClassListItem = ({ name, i }: ClassListItemProps) => {
  return (
    <li
      key={i}
      className={`  md:height md:class-name h-[90px] rounded-xl border-2 border-solid  border-primary bg-primaryLight  text-center hover:bg-primary hover:text-primaryLight md:grid md:h-[200px] md:items-center md:text-center  ${
        i === 8 ? "col-span-2 m-auto  w-1/2 md:col-span-1 md:w-full" : ""
      }`}
    >
      <Link
        className=" grid h-[90px] items-center hover:text-white  "
        href={`/classes/${name}`}
      >
        <span className="mobile-class-name block  md:text-4xl ">{name}</span>
      </Link>
    </li>
  );
};

export default ClassListItem;
