import { MdOutlineLocalShipping } from "react-icons/md";
import NavBar from "../components/Navbar";
export const History = () => {
  return (
    <>
    <NavBar back={"home"} />
    <div className='flex items-center '>
    <MdOutlineLocalShipping className='text-4xl m-5'/>
    <p className='font-bold  underline underline-offset-8  '> Shippment History </p>
     </div>


<div className='flex space-x-6  p-1 shadow-xl'>
     <div>
    <h1 className='text-lg font-bold ml-3 mt-3'>Fashion Factory</h1>
    <p className='ml-3'>Ladies Kurti 1 Piece From Chennai<br/> To 
        Mumbai <br/> Courier
    </p>

     </div>
    
     <button type="button" className="text-white bg-green-500 hover:bg-blue-800 
     focus:ring-4 focus:ring-blue-300 font-medium rounded-full h-10 mt-10 text-sm px-5 py-2 me-2
      mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">VIEW</button>
     </div>


     <div className='flex space-x-6 shadow-xl p-1'>
     <div>
    <h1 className='text-lg font-bold ml-3 mt-3'>Prakash industry</h1>
    <p className='ml-3'>Paper Cups 5 set From Chennai<br/> To 
        Mumbai <br/> Part Truck
    </p>

     </div>
    
     <button type="button" className="text-white bg-green-500 hover:bg-blue-800 
     focus:ring-4 focus:ring-blue-300 font-medium rounded-full h-10 mt-10 text-sm px-5 py-2 me-2
      mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">VIEW</button>


      
     </div>
     
    </>
  )
}
