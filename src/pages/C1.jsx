import { Link } from "react-router-dom";
import m1 from "../assets/mach.jpg";
import m2 from "../assets/text.jpg";
import m3 from "../assets/control.jpg";
import m4 from "../assets/print.jpg";
import m5 from "../assets/used.jpg";
import m6 from "../assets/paper.jpg";
import m7 from "../assets/pri.jpg";
import m8 from "../assets/rolling.jpg";
import NavBar from '../components/Navbar';

export const C1 = () => {
  return (
    <>
      <NavBar name={"Industrial Plants"} back={"categories"} />
      <div className="grid gap-x-4 gap-y-2 grid-cols-2 mt-16 p-2">
        {[
          { img: m1, text: "Machines & Equipments", link: "/industry" },
          { img: m2, text: "Textile And Garment Machines", link: "/industry" },
          { img: m3, text: "Control Equipments", link: "/industry" },
          { img: m4, text: "Printing Machinery", link: "/industry" },
          { img: m5, text: "Used Machinery & Tools", link: "/industry" },
          { img: m6, text: "Paper Work & Making Machine", link: "/industry" },
          { img: m7, text: "Digital Printers", link: "/industry" },
          { img: m8, text: "Rolling Machines", link: "/industry" },
        ].map((category, index) => (
          <Link to={category.link} key={index}>
            <div className="bg-white shadow-md rounded-lg p-3 flex flex-col items-center h-48 w-full">
              <img src={category.img} alt="" className="h-20 w-20 object-contain mb-2" />
              <p className="text-sm font-medium text-center">{category.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
