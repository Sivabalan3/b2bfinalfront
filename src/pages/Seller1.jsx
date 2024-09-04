import NavBar from "../components/Navbar";
export const Seller1 = () => {
  return (
    <>
    <NavBar back={"home"} />
    <div className='border-solid border-2 border-indigo-600 p-5 m-5 rounded-lg mt-20'>
        <p className='text-xl font-semibold flex center p-2 ml-9'>Prakash Machineries Private Limited 4/5</p>
       
        <p className='ml-3 mt-5 font-semibold text-justify'>
            Faridabad , Haryana +(91) 8048614159
            Saurabh Gupta , Director

        </p>

        <p className='ml-3 font-semibold mt-10 '>PAN Number : 123456789</p>
        <p className='ml-3 font-semibold mt-10 '>GST Number : 123456789</p>
        <p className='ml-3 font-semibold mt-10 '>Company Name: Machinary Factor</p>

         

        <button type="button" className=" flex items-center text-white bg-green-500 hover:bg-blue-800 
     focus:ring-4 focus:ring-blue-300 font-medium rounded-full h-10 mt-10 text-sm px-5 py-2 me-2
      mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 p-5">OK</button>

    </div>

    


    

    </>
  )

}
