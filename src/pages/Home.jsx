import { useState, useEffect } from "react";
import NavBar from "../components/Navbar";
import Products from "../components/Products";
import {CategoryList} from "./CategoryList";
import AdminDashBoard from "./AdminDashBoard";
import SellerDashBoard from "./SellerDashBoard";

const Home = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setRole(storedUser.role);
    }
  }, []);

  return (
    <>
      <NavBar name={"Hello Sai"} isHome={true} />
      
      {role === "user" && (
        <>
          <Products />
          <CategoryList />
        </>
      )}

      {role === "admin" && (
        <>
          <AdminDashBoard />
        </>
      )}
      {role === "seller" && (
        <>
        <SellerDashBoard />
        </>
      )}

      {!role && <p className="mt-20 ml-5">Loading...</p>}
    </>
  );
};

export default Home;
