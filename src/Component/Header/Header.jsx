import { IoSearch } from "react-icons/io5";
import { PiUserCheckBold } from "react-icons/pi";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h2 className="text-2xl font-bold">Recipe Calories</h2>
      </div>
      <div className="flex items-center list-none gap-6">
        <li>
          <a href=""></a>Home
        </li>
        <li>
          <a href="">Recipes</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">search</a>
        </li>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-4  bg-gray-100 p-2 rounded-2xl">
          <span>
            <IoSearch></IoSearch>
          </span>
          <input className="bg-gray-100" placeholder="search.." type="text" />
        </div>
        <div className="bg-green-400 p-2 rounded-full">
          <span>
            <PiUserCheckBold></PiUserCheckBold>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
