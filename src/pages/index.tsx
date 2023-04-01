import { ClassDescription } from "@prisma/client";
import { type NextPage } from "next";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("/api/read/class")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <ul>
          {data ? (
            data.map((classDescription: ClassDescription) => (
              <li key={classDescription.id}>{classDescription.name}</li>
            ))
          ) : (
            <></>
          )}
        </ul>
      )}
    </>
  );
};

export default Home;
