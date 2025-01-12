import { useState } from "react";
import "./App.css";
import Banner from "./Component/Banner/Banner";
import Caloris from "./Component/Caloris/Caloris";
import Header from "./Component/Header/Header";
import Recipes from "./Component/Recipes/Recipes";
import Want_cook from "./Component/Want_cook/Want_cook";

function App() {
  const [rescook, setRescook] = useState([]);

  const handleSlectCook = (cook) => {
    const newCook = [...rescook, cook];
    setRescook(newCook);
  };

  return (
    <>
      <div className="mx-auto container p-2">
        <Header></Header>
        <Banner></Banner>
        <Recipes></Recipes>
        <div className="grid grid-cols-3  gap-10">
          <div className="col-span-2">
            <Caloris handleSlectCook={handleSlectCook}></Caloris>
          </div>
          <div className="col-span-1">
            <Want_cook rescook={rescook}></Want_cook>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
