import { MdOutlineLocalShipping } from "react-icons/md";
import NavBar from "../components/Navbar";
export const Ship = () => {
  return (
    <>
    <NavBar name={"Shipping"} back={"home"}/>
    <div className='flex items-center mt-16 '>
    <MdOutlineLocalShipping className='text-4xl m-5'/>
    <p className='font-bold  underline underline-offset-8  '> Shippment Booking</p>
     </div>


<div className='flex space-x-6  p-1 shadow-xl'>
     <div>
    <h1 className='text-lg font-bold ml-3 mt-3'>Fashion Factory</h1>
    <p className='ml-3'>Ladies Kurti 1 Piece From Chennai<br/> To 
        Mumbai <br/> Courier
    </p>

     </div>
    
     <button type="button"  className="text-white bg-green-400 hover:bg-green-800 
     focus:ring-4 focus:ring-green-300 font-medium rounded-full h-10 mt-10 text-sm px-5 py-2 me-2
      mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">VIEW</button>
     </div>


     <div className='flex space-x-6 shadow-xl p-1'>
     <div>
    <h1 className='text-lg font-bold ml-3 mt-3'>Prakash industry</h1>
    <p className='ml-3'>Paper Cups 5 set From Chennai<br/> To 
        Mumbai <br/> Part Truck
    </p>

     </div>
    
     <button type="button"  className="text-white bg-green-400 hover:bg-green-800 
     focus:ring-4 focus:ring-green-300 font-medium rounded-full h-10 mt-10 text-sm px-5 py-2 me-2
      mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">VIEW</button>


      
     </div>
     
    </>
  )
}
