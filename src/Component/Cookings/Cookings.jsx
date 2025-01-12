import { IoMdTime } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";

const Cookings = ({ cook }) => {
  console.log(cook);
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
    <div>
      <div>
        <img className="w-80 mt-2" src={recipe_image} alt="" />
        <h2>{recipe_name}</h2>
        <p>{short_description}</p>

        <p>indredient{ingredients.length}</p>
        {ingredients.map((inm, inx) => (
          <div key={inx}>{inm}</div>
        ))}
        <div className="flex gap-2">
          <div className="flex gap-2 items-center">
            <span>
              <IoMdTime></IoMdTime>
            </span>
            <p>{preparing_time}</p>
          </div>
          <div className="flex gap-2 items-center">
            <span>
              <AiOutlineFire></AiOutlineFire>
            </span>
            <p>{preparing_time}</p>
          </div>
        </div>
        <button className="bg-teal-500 p-2 rounded-xl">Want to cook</button>
      </div>
    </div>
  );
};

export default Cookings;
