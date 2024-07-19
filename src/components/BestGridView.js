import shirt from "../assets/shirt/shirt.png";
import shirt2 from "../assets/shirt/shirt3.png";
import shirt1 from "../assets/shirt/shirt2.png";
import Rating from "@mui/material/Rating";

function BestGridView() {
  const bestImages = [
    {
      id: 0,
      rating: 5,
      title: "Casual Shirt",
      image: shirt,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit earum consequuntur odit!",
    },
    {
      id: 1,
      rating: 4,
      title: "Printed Shirt",
      image: shirt1,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit earum consequuntur odit!",
    },
    {
      id: 2,
      rating: 4,
      title: "Women Shirt",
      image: shirt2,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit earum consequuntur odit!",
    },
  ];
  return (
    <div className="py-6">
      <div
        className={`h-auto flex flex-col  justify-evenly items-center lg:flex-row  pt-24 gap-[150px]  lg:gap-2`}
      >
        {bestImages.map((bestImage) => (
          <div
            key={bestImage.id}
            className="flex flex-col w-[350px] items-center hover:bg-gray-900 hover:text-white ease-in-out duration-300 rounded-md shadow-lg cursor-pointer"
          >
            {/* Space for rating star */}

            <img
              src={bestImage.image}
              alt=""
              className="relative -top-20 w-[200px]"
            />
            <div className="flex justify-center relative -top-12">
              <Rating name="read-only" value={bestImage.rating} readOnly />
            </div>

            <strong className="text-center relative -top-12">
              {bestImage.title}
            </strong>
            <p className="text-center relative -top-12">{bestImage.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="w-32 h-10 mx-auto bg-button-color rounded-md ">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default BestGridView;
