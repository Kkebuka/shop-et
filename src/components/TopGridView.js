import React from "react";
import women from "../assets/women/women.png";
import women2 from "../assets/women/women2.jpg";
// import women3 from "../assets/women/women3.png";
import women4 from "../assets/women/women4.png";
import women5 from "../assets/hero/women.png";

function TopGridView() {
  const gridProperty = [
    { id: 0, title: "Women Ethic", color: "White", image: women, rating: "" },
    { id: 1, title: "Women Western", color: "Red", image: women2, rating: "" },
    {
      id: 2,
      title: "Women Glasses",
      color: "Brown",
      image: women2,
      rating: "",
    },
    {
      id: 3,
      title: "Printed T-shirt",
      color: "Yellow",
      image: women4,
      rating: "",
    },
    { id: 4, title: "Fancy Bags", color: "Pink", image: women5, rating: "" },
  ];
  return (
    <div>
      {gridProperty.map((single) => (
        <div key={single.id}>
          <img src={single.image} alt="" />
          <strong>{single.title}</strong>
          <p>{single.color}</p>
        </div>
      ))}
    </div>
  );
}

export default TopGridView;
