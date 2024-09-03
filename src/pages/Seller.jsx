import { RxHamburgerMenu } from "react-icons/rx";
export const Seller = () => {
  return (
    <>
     <div className='bg-green-400 flex items-center space-x-5 pb-5 text-white font-bold'>
    <RxHamburgerMenu className='text-xl m-2 text-white font-extrabold'/>
    <p>Seller List</p>
    </div>
<div className='bg-green-500 mt-7 m-2 p-2 rounded-lg'>
    <div className='flex space-x-8'>
    <p className='text-white font-semibold'>Index</p>
    <p className='text-white font-semibold'>Seller</p>
    <p className='text-white font-semibold'>Business</p>
    <p className='text-white font-semibold'>Action</p>
    </div>
    </div>


    <div className='mt-7 m-2 p-2 rounded-full '>
    <div className='flex space-x-8'>
    <p className=' font-semibold'>1</p>
    <p className=' font-semibold'>Prakash</p>
    <p className='font-semibold'>Machinary</p>
    <button className='bg-green-400 p-0.5 rounded-full w-16'>View</button>
    </div>
    </div>

    </>
  )
}
