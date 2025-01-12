import { useEffect, useState } from "react";
import Cookings from "../Cookings/Cookings";

const Caloris = () => {
  const [caloris, setCaloris] = useState([]);
  console.log(caloris);

  useEffect(() => {
    fetch("/caloris.json")
      .then((res) => res.json())
      .then((data) => setCaloris(data));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 ">
      {caloris.map((cook) => (
        <Cookings cook={cook} key={caloris.id}></Cookings>
      ))}
    </div>
  );
};

export default Caloris;
