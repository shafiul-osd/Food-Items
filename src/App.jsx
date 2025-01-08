import "./App.css";
import Banner from "./Component/Banner/Banner";
import Header from "./Component/Header/Header";

function App() {
  return (
    <>
      <div className="mx-auto container p-2">
        <Header></Header>
        <Banner></Banner>
      </div>
    </>
  );
}

export default App;
