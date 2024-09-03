import { useState } from 'react';
import NavBar from '../components/Navbar';

const RequirementCard = ({ title, postedDate, supplier, additionalDetails, id }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='relative'>

    
    <div className="bg-gray-300 shadow-md rounded-lg p-4 absolute grid grid-cols-2 gap-2 -z-10">
      {/* Left Column */}
      <div>
        <h2 className="text-sm font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-2">Posted Date: {postedDate}</p>
        <p className="text-gray-600 text-sm">Supplier: {supplier}</p>
        <div className={`mt-4 transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          <p className="text-gray-600 text-sm">{additionalDetails}</p>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex items-center justify-center">
        <button className="bg-green-400 text-white px-3 py-1 rounded-md text-sm">
          Share Feedback
        </button>
      </div>

      {/* View Details Button */}
      <button
        onClick={toggleDetails}
        className={`absolute bottom-2 right-24 bg-white text-gray-600 px-2 py-1 shadow-lg transition-all duration-500 ease-in-out transform translate-y-6 ${isExpanded ? 'rounded-tl-[0%] rounded-tr-[0%] rounded-br-[48%] rounded-bl-[48%]' : 'rounded-tl-[48%] rounded-tr-[48%] rounded-br-[10%] rounded-bl-[0%]'}`}
      >
        {isExpanded ? 'Hide Details' : 'View Details'}
      </button>
    </div>
    </div>
  );
};

const Requirements = () => {
  return (
    <>
      <NavBar name={"My Orders"} back={"home"} isOrder={true} />
      <div className="p-4 mt-16 mb-1">
        {/* Card Container */}
        <div className="space-y-6">
          {/* Card 1 */}
          <RequirementCard
            title="Coffee Cup Making Machine"
            postedDate="August 21, 2024"
            supplier="ABC Machines Ltd."
            additionalDetails="This machine offers high efficiency, easy maintenance, and energy-saving features."
            id={1}
          />
        </div>
      </div>
    </>
  );
};

export default Requirements;
