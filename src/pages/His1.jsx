import kurthi from "../assets/C3/kiruthi.jpg";
import NavBar from "../components/Navbar";
export const His1 = () => {
  return (
    <>
      <NavBar back={"home"} />
      <div className="border-solid border-2 border-indigo-600 p-5 m-5 mt-20 rounded-lg">
        <p className="text-xl font-semibold flex center p-2 ml-9 ">
          Fashion Factory
        </p>
        <img src={kurthi} alt="" className="ml-3" />
        <p className="ml-3 mt-5 font-semibold text-justify">
          Ladies Kurti 1 Piece From Chennai To Mumbai Courier Order ID :
          123456789 Tracking ID : 123456788
        </p>

        <button
          type="button"
          className=" flex items-center text-white bg-green-500 hover:bg-blue-800 
     focus:ring-4 focus:ring-blue-300 font-medium rounded-full h-10 mt-10 text-sm px-5 py-2 me-2
      mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 p-5"
        >
          OK
        </button>
      </div>
    </>
  );
};
