import { Link } from "react-router-dom";
import ind from "../assets/indus.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.jpg";
import NavBar from '../components/Navbar';

export const C3 = () => {
  return (
    <>
      <NavBar name={"Construction Materials"} back={"categories"} />

      <div className="grid gap-4 grid-cols-2 p-4 mt-16">
        <Link to="/industry">
          <div className='text-center p-4 bg-white rounded shadow hover:shadow-lg transition h-48 flex flex-col justify-between'>
            <img src={ind} alt="Machines & Equipments" className='h-24 w-24 mx-auto'/>
            <p className='font-semibold mt-2'>Machines & Equipments</p>
          </div>
        </Link>

        <Link to="/industry">
          <div className='text-center p-4 bg-white rounded shadow hover:shadow-lg transition h-48 flex flex-col justify-between'>
            <img src={c2} alt="Textile And Garment Machines" className='h-24 w-24 mx-auto'/>
            <p className='font-semibold mt-2'>Textile And Garment Machines</p>
          </div>
        </Link>

        <Link to="/industry">
          <div className='text-center p-4 bg-white rounded shadow hover:shadow-lg transition h-48 flex flex-col justify-between'>
            <img src={c3} alt="Control Equipments" className='h-24 w-24 mx-auto'/>
            <p className='font-semibold mt-2'>Control Equipments</p>
          </div>
        </Link>
      </div>
    </>
  );
};
