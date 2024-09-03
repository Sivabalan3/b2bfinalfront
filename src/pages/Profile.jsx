import { FaChevronLeft } from 'react-icons/fa';
import { AiFillEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Backend_url } from '../constant';
import axios from 'axios';





const Profile = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        contactNo: '',
        Id: '',
        profile: '',
      });

      useEffect(() => {
        const userString = localStorage.getItem('user');
        const userDetails = userString ? JSON.parse(userString) : null;
        
        if (userDetails && userDetails._id) {
          const fetchUserDetails = async () => {
            try {
              const url = `${Backend_url}/api/auth/user/${userDetails._id}`;
              const response = await axios.get(url);
              const userData = response.data;
              
              setUser({
                username: userData.username || '',
                email: userData.email || '',
                contactNo: userData.contactNo || '',
                password: '',
                confirmPassword: '',
                Id: userData._id,
               profile: userData.profile,
              });
            } catch (error) {
              console.error('Error fetching user details:', error.response ? error.response.data : error.message);
            }
          };
    
          fetchUserDetails();
        }
      }, []);

  return (
    <>
      <div className='flex justify-center bg-green-400 pb-5 pt-2'>
        <Link to='/home'>
        <FaChevronLeft className='relative right-16 top-4 text-lg text-white'/>
        </Link>
        <p className='font-bold text-center text-white text-3xl pt-2'>Profile</p>
        <Link to="/edit">
              <AiFillEdit className="text-white text-xl relative top-5 left-10" />
            </Link>
      </div>
      <section className="my-auto">
        <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
          <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center">
            <form>
              <div className="w-full rounded-sm bg-cover bg-center bg-no-repeat items-center">
                <div 
                  className="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${user.profile})` }} // Display selected or fetched image
                >
                  <div className=" rounded-full w-6 h-6 text-center ml-28 mt-4">
                  </div>
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full mb-4 mt-6">
                  <label htmlFor="username" className="mb-2 text-black ml-1">Name</label>
                  <div className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-800">
                  {user.username}
                </div>
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full mb-4">
                  <label htmlFor="email" className="mb-2 text-black ml-1">Email</label>
                  <div className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-800">
                  {user.email}
                </div>
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full mb-4">
                  <label htmlFor="contactNo" className="mb-2 text-black  ml-1">Contact No</label>
                  <input
                    type="text"
                    name="contactNo"
                    value={user.contactNo}
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-800"
                    placeholder="Phone"
                  />
                </div>
              </div>
              
              
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
export default Profile