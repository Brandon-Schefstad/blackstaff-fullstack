type ClassListItemProps = {
  name: string;
  i: number;
};
const ClassListItem = ({ name, i }: ClassListItemProps) => {
  return (
    <li
      className={`  grid h-[90px] items-center rounded-xl border-2 border-solid border-primary bg-primaryLight py-2  text-center hover:bg-primary hover:text-primaryLight ${
        i === 8 ? "col-span-2  m-auto w-1/2" : ""
      }`}
      key={i}
    >
      <a className=" hover:text-white" href={`/classes/${name}`}>
        <span className="mobile-class-name block ">{name}</span>
      </a>
    </li>
  );
};

export default ClassListItem;
