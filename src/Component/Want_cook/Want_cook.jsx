import Rescook_items from "../Rescook_items/Rescook_items";

const Want_cook = ({ rescook }) => {
  return (
    <div className="border border-slate-400 px-4 items-center rounded-lg">
      <h2 className="text-center">want to cook: {rescook.length}</h2>

      {rescook.map((recook) => (
        <Rescook_items recook={recook}></Rescook_items>
      ))}
    </div>
  );
};

export default Want_cook;
