import { Link } from "react-router-dom";
import ind from "../assets/indus.png";
import c2 from "../assets/c2.png";
import c8 from "../assets/c8.jpg";
import NavBar from '../components/Navbar';

export const C7 = () => {
  return (
    <>
      <NavBar name={"Bicycles and Many More"} back={"categories"} />

      <div className="grid gap-4 grid-cols-2 p-4 mt-16">
        <Link to="/industry">
          <div className='text-center p-4 h-44 bg-white rounded shadow hover:shadow-lg transition'>
            <img src={ind} alt="Cycles" className='h-24 w-full object-cover rounded-lg mb-2' />
            <p className='font-semibold text-sm'>Cycles</p>
          </div>
        </Link>
        
        <div className='text-center p-4 h-44 bg-white rounded shadow hover:shadow-lg transition'>
          <img src={c2} alt="Textile And Garment Machines" className='h-24 w-full object-cover rounded-lg mb-2' />
          <p className='font-semibold text-sm'>Textile And Garment Machines</p>
        </div>
        
        <div className='text-center p-4 h-44 bg-white rounded shadow hover:shadow-lg transition'>
          <img src={c8} alt="Control Equipments" className='h-24 w-full object-cover rounded-lg mb-2' />
          <p className='font-semibold text-sm'>Control Equipments</p>
        </div>
      </div>
    </>
  );
}
