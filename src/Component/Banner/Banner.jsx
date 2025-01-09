import banner from "../../assets/image/professional-chef-preparing-food-kitchen.jpg";

const Banner = () => {
  return (
    <div>
      <div
        style={{
          background: `
           linear-gradient(rgba(21,11,43,0.9),rgba(21,11,43,0)),url(${banner})`,
          height: "100vh",
          backgroundSize: "100%",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
        className="rounded-xl  flex items-center justify-center mt-10"
      >
        <div className="text-white text-center  px-6">
          <h2 className="text-6xl font-bold">
            Discover an exceptional cooking class tailored for you!
          </h2>
          <p className="font-bold  px-10">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding problems to become an exceptionally
            well world-class Programmer.
          </p>
          <div className="flex gap-4 items-center justify-center mt-6">
            <button className="bg-purple-600 p-2 rounded-2xl text-black">
              Explore Now
            </button>
            <button className="border border-white p-2 rounded-2xl">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
