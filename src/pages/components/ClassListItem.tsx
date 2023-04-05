type ClassListItemProps = {
  name: string;
  i: number;
};
const ClassListItem = ({ name, i }: ClassListItemProps) => {
  return (
    <a href={`/classes/${name}`}>
      <li className={"mx-8 border-b-2 border-solid border-black"} key={i}>
        <span className="block px-2">{name}</span>
      </li>
    </a>
  );
};

export default ClassListItem;
