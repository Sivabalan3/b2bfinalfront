import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaBell,
  FaHome,
  FaEdit,
  FaEnvelope,
  FaBox,
  FaHistory,
  FaShoppingCart,
  FaShieldAlt,
  FaFileAlt,
  FaSearch,
  FaChevronLeft,
} from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ name, back, isHome, isOrder }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [role, setRole] = useState("user"); // Default role is user
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user details from local storage or API
    const fetchUserRole = async () => {
      const phone = localStorage.getItem("user");
      if (phone) {
        const userObject = JSON.parse(phone);
        const userRole = userObject.role || "user"; // Fetch the role from userObject
        setRole(userRole);
      }
    };

    fetchUserRole();
  }, []);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data from local storage
    navigate("/login"); // Redirect to the login page
  };

  const phone = localStorage.getItem("user");
  const userObject = phone ? JSON.parse(phone) : {};
  const phonno = userObject.contactNo || "N/A";
  const username = userObject.username || "N/A";

  return (
    <div className="relative z-50">
      {/* Always Visible Header */}
      <div className="flex items-center justify-between p-1 bg-green-400 text-white fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center z-50">
          <button
            onClick={toggleNav}
            className="text-xl relative bottom-4 left-2"
          >
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
          {isHome ? null : (
            <Link to={`/${back}`}>
              <FaChevronLeft className="absolute z-50 top-10 left-3" />
            </Link>
          )}
          {isOrder ? (
            <nav className="bg-green-400 w-auto text-white h-16">
              <h1 className="font-bold relative left-4 text-lg">My Orders</h1>
              <div className="relative right-4 flex items-center justify-between font-bold h-full w-svw">
                <NavLink
                  to="/requirements"
                  className={({ isActive }) =>
                    `relative py-2 mb-2 pl-10 text-center ${
                      isActive ? "underline underline-offset-2" : ""
                    }`
                  }
                >
                  Requirements
                </NavLink>
                <NavLink
                  to="/myorders"
                  className={({ isActive }) =>
                    `relative py-2 mb-2 pr-14 text-center ${
                      isActive ? "underline underline-offset-2" : ""
                    }`
                  }
                >
                  My Orders
                </NavLink>
              </div>
            </nav>
          ) : (
            <div className="ml-4 flex flex-col">
              <span className="text-lg font-bold">Hello {username}</span>
              {!isFocused && (
                <FaSearch className="absolute text-gray-500 bottom-3 left-12 transition-all duration-1000" />
              )}
              <input
                type="text"
                placeholder="Search..."
                className="p-1 pl-7 w-56 text-black rounded-md focus:outline-none focus:ring-0"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
          )}
        </div>
        <div className="text-xl relative bottom-4 right-2">
          <Link to="/notifications">
            <FaBell />
          </Link>
        </div>
      </div>

      {/* Navigation Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-green-400 text-white p-5 transform ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
        style={{ width: "75%" }}
      >
        <ul className="space-y-4 mt-14 z-30">
          {/* Common Links */}
          <li className="flex items-center">
            <IoPerson className="mr-3" />
            <Link to="/profile" className="hover:underline">
              +91 - {phonno}
            </Link>
            <Link to="/edit">
              <AiFillEdit className="ml-5 text-xl" />
            </Link>
          </li>
          <li className="flex items-center">
            <FaHome className="mr-3" />
            <Link to="/home" className="hover:underline">
              Home
            </Link>
          </li>

          {/* Admin Links */}
          {role === "admin" && (
            <>
              <li className="flex items-center">
                <BiSolidCategoryAlt className="mr-3" />
                <Link to="/createcategory" className="hover:underline">
                  Create Category
                </Link>
              </li>
              <li className="flex items-center">
                <FaTruckFast className="mr-3" />
                <Link to="/ship" className="hover:underline">
                  Ship with B2B
                </Link>
              </li>
            </>
          )}

          {/* Seller Links */}
          {role === "seller" && (
            <>
              <li className="flex items-center">
                <FaEdit className="mr-3" />
                <Link to="/createproduct" className="hover:underline">
                  Add Products
                </Link>
              </li>
            </>
          )}
          {role === "user" && (
            <>
              <li className="flex items-center">
                <FaBox className="mr-3" />
                <Link to="/myCarts" className="hover:underline">
                  My Carts
                </Link>
              </li>

              <li className="flex items-center">
                <FaBox className="mr-3" />
                <Link to="/myorders" className="hover:underline">
                  Track Order
                </Link>
              </li>
            </>
          )}

          {/* Common Links */}
          <li className="flex items-center">
            <FaHistory className="mr-3" />
            <Link to="/his" className="hover:underline">
              Order History
            </Link>
          </li>
          <li className="flex items-center">
            <FaBox className="mr-3" />
            <Link to="/orders" className="hover:underline">
              {role === "user" ? "My Orders" : "New Orders"}
            </Link>
          </li>
          <li className="flex items-center">
            <FaEnvelope className="mr-3" />
            <Link to="/chat" className="hover:underline">
              Messages
            </Link>
          </li>

          <li className="flex items-center">
            <FaShoppingCart className="mr-3" />
            <Link to="/payments" className="hover:underline">
              Payment Information
            </Link>
          </li>

          <li className="flex items-center">
            <FaShieldAlt className="mr-3" />
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li className="flex items-center">
            <FaFileAlt className="mr-3" />
            <Link to="/terms-conditions" className="hover:underline">
              Terms and Conditions
            </Link>
          </li>
          <li className="flex items-center">
            <LuLogOut className="mr-3" onClick={handleLogout} />
            <span
              className="hover:underline cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
