import { useEffect, useState } from "react";

const Caloris = () => {
  const [caloris, setCaloris] = useState([]);

  useEffect(() => {
    fetch("/caloris.json")
      .then((res) => res.json())
      .then((data) => setCaloris(data));
  }, []);
  console.log(setCaloris);

  return <div></div>;
};

export default Caloris;
