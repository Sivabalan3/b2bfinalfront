import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaChevronLeft,FaCamera } from 'react-icons/fa';
import { Backend_url } from '../constant';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export const EditUser = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    contactNo: '',
    password: '',
    confirmPassword: '',
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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profile' && files && files.length > 0) {
        setUser((prevUser) => ({
            ...prevUser,
            profile: URL.createObjectURL(files[0]), // Temporarily show the selected image
        }));
    } else {
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', user.username);
    formData.append('email', user.email);
    formData.append('contactNo', user.contactNo);
    // formData.append('password', user.password);
    if (user.profile) {
        formData.append('profile', user.profile); // Directly append the file object
    }

    try {
        const url = `${Backend_url}/api/auth/user/${user.Id}`;
        const response = await axios.put(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(response)
        Swal.fire({
          icon: "success",
          title: "Profile updated Success",
          showConfirmButton: false,
          timer: 1500
        });
    } catch (error) {
        console.error('Error updating profile:', error.response ? error.response.data : error.message);
    }
};



  return (
    <>
      <div className='flex justify-center bg-green-400 pb-5 pt-2'>
        <Link to='/home'>
        <FaChevronLeft className='relative right-16 top-5 text-lg text-white'/>
        </Link>
        <p className='font-bold text-center text-white text-3xl pt-2'>Edit User</p>
      </div>
      <section className="my-auto">
        <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
          <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center">
            <form onSubmit={handleSubmit}>
              <div className="w-full rounded-sm bg-cover bg-center bg-no-repeat items-center">
                <div 
                  className="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${user.profile})` }} // Display selected or fetched image
                >
                  <div className=" rounded-full w-6 h-6 text-center ml-28 mt-4">
                 
                    <input type="file" name="profile" id="upload_profile" hidden onChange={handleChange} />
                    <label htmlFor="upload_profile">
                    <FaCamera className='relative top-1 left-1 text-green-600'/>
                    </label>
                  </div>
                </div>
              </div>
              <h2 className="text-center mt-1 font-bold text-black">Update Profile Image</h2>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full mb-4 mt-6">
                  <label htmlFor="username" className="mb-2 text-black ml-1">Name</label>
                  <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-800"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full mb-4">
                  <label htmlFor="email" className="mb-2 text-black ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-800 "
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full mb-4">
                  <label htmlFor="contactNo" className="mb-2 text-black  ml-1">Contact No</label>
                  <input
                    type="text"
                    name="contactNo"
                    value={user.contactNo}
                    onChange={handleChange}
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-800"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full mb-4">
                  <label htmlFor="password" className="mb-2 text-black ml-1">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-800"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full mb-4">
                  <label htmlFor="confirmPassword" className="mb-2 text-black ml-1">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={handleChange}
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-800"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="py-3 px-6 text-center bg-green-400 text-gray-800 rounded-lg font-bold text-lg"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
