import { MdOutlineArrowBack } from "react-icons/md";
import Swal from 'sweetalert2';
import paper from "../assets/C3/papercup.jpg";
import { useNavigate } from 'react-router-dom';

export const View2 = () => {

    const navigate = useNavigate()
  const handleAccept = () => {
    Swal.fire({
      title: 'Tracking ID Accepted',
      text: 'Your tracking ID has been accepted successfully!',
      icon: 'success',
      confirmButtonText: 'OK'
    });  navigate("/c2");
  };
 

  return (
    <>
      <div className='bg-green-400 flex items-center space-x-5 pb-5 text-white font-bold'>
        <MdOutlineArrowBack className='ml-2' />
        <p>Shipping</p>
      </div>
      <div className='border-solid border-2 border-indigo-600 p-5 m-5 rounded-lg'>
        <p className='text-xl font-semibold flex center p-2 ml-9'>Paper Factory</p>
        <img src={paper} alt="Paper Factory" className='ml-3' />
        <p className='ml-3 mt-5 font-semibold text-justify'>
          Ladies Kurti 1 Piece 
          From Chennai To 
          Mumbai Courier
          Order ID : 123456789
        </p>

        <p className='ml-3 font-semibold mt-10'>Enter Tracking ID :</p>

        <input 
          type="text" 
          id="first_name" 
          className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="123456789" 
          required 
        />

        <button 
          type="button" 
          className="flex items-center text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full h-10 mt-10 text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 p-5" 
          onClick={handleAccept}
        >
          Accept
        </button>
      </div>
    </>
  );
}
