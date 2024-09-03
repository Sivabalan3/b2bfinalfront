import NavBar from "../components/Navbar";

const MyOrders = () => {
  return (
    <>
      <NavBar name={"My Orders"} back={"home"} isOrder={true} />
      <div className="p-4 mt-16">
        {/* Single Card */}
        <div className="bg-gray-300 shadow-md rounded-lg p-4 relative grid grid-cols-2 gap-2 mb-6 -z-50">
          {/* Left Column */}
          <div>
            <h2 className="text-sm font-semibold mb-2">
              Coffee Cup Making Machine
            </h2>
            <p className="text-gray-600 text-sm mb-2">
              Posted Date: August 21, 2024
            </p>
            <p className="text-gray-600 text-sm">Supplier: ABC Machines Ltd.</p>
          </div>
        </div>

        {/* Order Tracking Card */}
        <section className="py-1 ">
          <ul className="border-l border-gray-900 relative list-none -z-10">
            <li className="mb-10 ml-8 relative">
              <div className="absolute -left-10 w-4 h-4 bg-green-400 rounded-full"></div>
              <h5 className="text-lg font-bold">
                Order Placed
              </h5>
              <p className="text-sm text-gray-500 mb-2 font-bold">
                Your Order Has Been placed 
              </p>
              <p className="text-sm text-gray-500">
                07.09 PM, 31 July 2024
              </p>
            </li>

            <li className="mb-10 ml-8 relative">
              <div className="absolute -left-10 top-1 w-4 h-4 bg-gray-700 rounded-full"></div>
              <h5 className="text-lg font-bold">Order shipped</h5>
    
            </li>

            <li className="mb-10 ml-8 relative">
              <div className="absolute -left-10 top-1 w-4 h-4 bg-gray-700 rounded-full"></div>
              <h5 className="text-lg font-bold">Order delivery</h5>
              <p className="text-sm text-gray-500">
                Expected Delivery will be on 10-aug-2024
              </p>
            </li>

      
          </ul>
        </section>
      </div>
    </>
  );
};

export default MyOrders;
