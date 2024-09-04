// import { Link } from "react-router-dom";
// // import ind from "../assets/indus.png";
// // import c2 from "../assets/c2.png";
// // import c3 from "../assets/c3.jpg";
// // import c4 from "../assets/c4.jpg";
// // import c5 from "../assets/c5.jpg";
// // import c6 from "../assets/c6.jpg";
// // import c7 from "../assets/c7.jpg";
// // import c8 from "../assets/c8.jpg";
// import NavBar from "../components/Navbar";

// export const Categories = () => {
//   return (
//     <>
//       <NavBar name={"Categories"} back={"home"} />
//       {/* <div className="grid gap-x-4 gap-y-2 grid-cols-2 mt-16 p-2">
//         {[
//           { img: ind, text: "Industrial Plants, Machinery & Equipments", link: "/c1" },
//           { img: c2, text: "Customer Electronics and Household Applications", link: "/c2" },
//           { img: c3, text: "Building and Construction Materials", link: "/c3" },
//           { img: c4, text: "Clothing And Garments", link: "/c4" },
//           { img: c5, text: "Medical And Consultancy Services", link: "/c5" },
//           { img: c6, text: "Medicines And Ayurvedha", link: "/c6" },
//           { img: c7, text: "Bicycles and Many More", link: "/c7" },
//           { img: c8, text: "Sports Material And Equipments", link: "/c8" },
//         ].map((category, index) => (
//           <Link to={category.link} key={index}>
//             <div className="bg-white shadow-md rounded-lg p-3 flex flex-col items-center h-48 w-full">
//               <img src={category.img} alt="" className="h-20 w-20 object-contain mb-2" />
//               <p className="text-sm font-medium text-center">{category.text}</p>
//             </div>
//           </Link>
//         ))}
//       </div> */}
//     </>
//   );
// };

export const Categories = ({ categories }) => {
  return (
    <>
  <div className="grid gap-x-4 gap-y-4 grid-cols-1 p-2">
    {categories.map((cat) => (
      <div key={cat._id} className="bg-white shadow-md rounded-lg p-3 flex flex-col items-center">
        {cat.image && (
          <img
            src={`http://localhost:5000/api/image/${cat.image.split('/').pop()}`}
            alt={cat.name}
            className="h-32 w-32 object-cover mb-2 rounded-md"
          />
        )}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{cat.name}</h3>
        <p className="text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    ))}
  </div>
</>

  );
};



