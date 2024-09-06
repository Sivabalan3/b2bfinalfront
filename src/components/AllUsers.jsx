// components/UserList.js
import { useState, useEffect } from "react";
import axios from "axios";
import { Backend_url } from "../constant";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2"; // Import SweetAlert2

const UserList = () => {
  const [users, setUsers] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const currentUserId = currentUser ? currentUser._id : null;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${Backend_url}/api/auth/allusers/${currentUserId}`
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [currentUserId]);

 
const handleDelete = async (userId) => {
    // Show confirmation dialog
    const result = await Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    });
  
    // Proceed if confirmed
    if (result.isConfirmed) {
      try {
        await axios.delete(`${Backend_url}/api/auth/delete/${userId}`);
        setUsers(users.filter((user) => user._id !== userId));
  
        // Display success message
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'User has been deleted successfully.',
          confirmButtonText: 'OK',
        });
      } catch (error) {
        console.error('Error deleting user:', error);
  
        // Display error message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'There was an error deleting the user.',
          confirmButtonText: 'OK',
        });
      }
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 p-4 border-b-4">
        <h1 className="text-green-400 text-center text-3xl">Users List</h1>
      {users.map((user) => (
        <div
          key={user._id}
          className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
        >
          <div>
            <h2 className="text-lg font-semibold">Username: {user.username}</h2>
            <p className="text-gray-600">Email: {user.email}</p>
          </div>
          <div className="flex flex-col items-end space-x-2">
            <button
              onClick={() => handleDelete(user._id)}
              className="p-2 text-red-500 hover:text-red-700"
            >
              <FaTrash className="text-xl" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
