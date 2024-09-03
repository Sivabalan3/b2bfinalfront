import { Link } from "react-router-dom";
import ind from "../assets/indus.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.jpg";
import NavBar from '../components/Navbar';

export const C4 = () => {
  return (
    <>
      <NavBar name={"Clothing And Garments"} back={"categories"} />


      {/* Grid Layout */}
      <div className="grid gap-x-4 gap-y-4 grid-cols-2 p-4 mt-16">
        <Link to="/industry">
          <div className='text-center h-44 p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
            <img src={ind} alt="T Shirt" className="w-full h-24 object-cover rounded-lg mb-2" />
            <p className='font-semibold text-sm'>T Shirt</p>
          </div>
        </Link>
        <div className='text-center h-44 p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
          <img src={c2} alt="Textile And Garment Machines" className="w-full h-24 object-cover rounded-lg mb-2" />
          <p className='font-semibold text-sm'>Textile And Garment Machines</p>
        </div>
        <div className='text-center h-44 p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
          <img src={c3} alt="Control Equipments" className="w-full h-24 object-cover rounded-lg mb-2" />
          <p className='font-semibold text-sm'>Control Equipments</p>
        </div>
      </div>
    </>
  );
};
