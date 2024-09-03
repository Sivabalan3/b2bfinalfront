import { Link } from "react-router-dom";
import ind from "../assets/indus.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";
import c5 from "../assets/c5.jpg";
import c6 from "../assets/c6.jpg";
import c7 from "../assets/c7.jpg";
import c8 from "../assets/c8.jpg";
import NavBar from '../components/Navbar';

export const C2 = () => {
  const categories = [
    { img: ind, text: "Industrial Machinery" },
    { img: c2, text: "SPM Machine" },
    { img: c3, text: "Footwear Machinery" },
    { img: c4, text: "Industrial Washing" },
    { img: c5, text: "Industrial Oil Filter Machine" },
    { img: c6, text: "Assebly Equipments" },
    { img: c7, text: "Tape Making Machine" },
    { img: c8, text: "Glass Machinery" },
  ];

  return (
    <>
      <NavBar name={"Electronics Appliances"} back={"categories"} />
      <div className="grid gap-x-4 gap-y-2 grid-cols-2 mt-16 p-2">
        {categories.map((category, index) => (
          <Link to="/industry" key={index}>
            <div className="bg-white shadow-md rounded-lg p-3 flex flex-col items-center h-44 w-full">
              <img src={category.img} alt={category.text} className="h-20 w-20 object-contain mb-2" />
              <p className="text-sm font-medium text-center">{category.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
