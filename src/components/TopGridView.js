import React from "react";
import women from "../assets/women/women.png";
import women2 from "../assets/women/women2.jpg";
import women3 from "../assets/women/women3.jpg";
import women4 from "../assets/women/women4.jpg";
import women5 from "../assets/hero/women.png";

console.log(women);
function TopGridView() {
  const gridProperty = [
    { id: 0, title: "Women Ethic", color: "White", image: women, rating: "" },
    {
      id: 1,
      title: "Women Western",
      color: "Red",
      image: women2,
      rating: "",
    },
    {
      id: 2,
      title: "Women Glasses",
      color: "Brown",
      image: women3,
      rating: "",
    },
    {
      id: 3,
      title: "Printed T-shirt",
      color: "Yellow",
      image: women5,
      rating: "",
    },
    { id: 4, title: "Fancy Bags", color: "Pink", image: women4, rating: "" },
  ];
  return (
    <div className="container mx-auto flex flex-col items-center space-y-5 lg:flex-row lg:justify-evenly ">
      {gridProperty.map((single) => (
        <div className="space-y-3" key={single.id}>
          <img
            src={single.image}
            alt=""
            className="w-[150px] h-[220px] object-cover rounded-md"
          />
          <strong className="font-semibold mt-8">{single.title}</strong>
          <p className="text-sm text-gray-600">{single.color}</p>
        </div>
      ))}
    </div>
  );
}

export default TopGridView;
