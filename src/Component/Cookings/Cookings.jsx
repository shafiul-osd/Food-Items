import { IoMdTime } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";

const Cookings = ({ cook, handleSlectCook }) => {
  const {
    recipe_image,
    recipe_id,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = cook;
  return (
    <div className="border border-slate-400 p-4 rounded-xl">
      <div className="">
        <img className="w-96 h-52 mt-2 rounded-lg" src={recipe_image} alt="" />
        <h2 className="font-bold text-xl mt-4">{recipe_name}</h2>
        <p className="text-neutral-700 text-base mt-5">{short_description}</p>
        <div className="mt-5">
          <hr />
        </div>
        <p className="mt-6 font-bold">indredient: {ingredients.length}</p>
        {ingredients.map((inm, inx) => (
          <li key={inx}>{inm}</li>
        ))}
        <div className="flex gap-6">
          <div className="flex gap-1 items-center">
            <span>
              <IoMdTime></IoMdTime>
            </span>
            <p>{preparing_time}</p>
          </div>
          <div className="flex gap-2 items-center">
            <span>
              <AiOutlineFire></AiOutlineFire>
            </span>
            <p>{calories}</p>
          </div>
        </div>
        <div className="mt-4">
          <button
            onClick={() => handleSlectCook(cook)}
            className="bg-teal-500 p-2 rounded-xl text-black font-bold"
          >
            Want to cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookings;
