const SpellStat = ({ stat, value }: { stat: string; value: string }) => {
  return (
    <div className="col-span-2 mx-12 grid grid-cols-2 gap-1  ">
      <h2 className="text-left">{stat}</h2>
      {/* <div className="border-b-2 border-dotted border-black"></div> */}
      <h2 className=" text-right">{value}</h2>
    </div>
  );
};

export default SpellStat;
