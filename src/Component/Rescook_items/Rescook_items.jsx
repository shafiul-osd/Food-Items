const Rescook_items = ({ recook }) => {
  const { recipe_name, preparing_time, calories } = recook;
  return (
    <div className="flex justify-between items-center gap-2 text-center mt-4 bg-slate-400 p-2 rounded-lg">
      <h2>Name {recipe_name}</h2>
      <p>Time {preparing_time}</p>
      <p>Calories {calories}</p>
    </div>
  );
};

export default Rescook_items;
