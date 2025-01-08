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
        className="rounded-xl"
      >
        <h2>hellow bg </h2>
      </div>
    </div>
  );
};

export default Banner;
