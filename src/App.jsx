import "./App.css";
import Banner from "./Component/Banner/Banner";
import Caloris from "./Component/Caloris/Caloris";
import Cookings from "./Component/Cookings/Cookings";
import Header from "./Component/Header/Header";
import Recipes from "./Component/Recipes/Recipes";
import Want_cook from "./Component/Want_cook/Want_cook";

function App() {
  return (
    <>
      <div className="mx-auto container p-2">
        <Header></Header>
        <Banner></Banner>
        <Recipes></Recipes>
        <div className="grid grid-cols-3  gap-10">
          <div className="col-span-2">
            <Caloris></Caloris>
          </div>
          <div className="col-span-1">
            <Want_cook></Want_cook>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
